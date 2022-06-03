from flask import Blueprint, render_template, session, redirect, url_for, request
from Bleuprints.auth import investigator_required, login_required
from pymongo import MongoClient
from services.util import update_old_description, approve_vote, denie_vote, get_case, get_description_index, get_form_to_dict, get_lastDesc, update_description, get_description, change_status_approve, change_status_denied


investigator = Blueprint('investigator', __name__, url_prefix='/', template_folder='../templates', static_folder='../static')
client = MongoClient("localhost", 27017)
db = client["pfe"]


@investigator.route('/update_cases')
@investigator_required
@login_required
def update_cases():
    user_id = session['user_id']
    user = db['users'].find_one({"_id": user_id})
    username = user["username"]
    cases = []
    for x in db['files'].find({}):
        case = get_case(x["index"])
        if case[3] == "closed" or case[3] == "reopen":
            new_case = {
                "created_by": case[0],
                "created_at": case[1],
                "file_hash": case[2],
                "index": x["index"]
            }
            cases.append(new_case)
    return render_template('update_cases.html', username=username, cases=cases)

@investigator.route('/update_case/<id>', methods=['GET', 'POST'])
@investigator_required
@login_required
def update_case(id):
    user_id = session['user_id']
    user = db['users'].find_one({"_id": user_id})
    file_name = db['files'].find_one({"index": int(id)})["file_name"]
    descriptions = []
    case = get_case(int(id))
    if case[3] != "closed" and case[3] != "reopen":
        return redirect(url_for("general.dashboard"))
    if request.method == "POST":
        if case[3] == "closed":
            dic = get_form_to_dict(request.form)
            dic["updated_by"] = user["first_name"]+" "+user["last_name"]
            update_description(id, dic)
        if case[3] == "reopen":
            dic = get_form_to_dict(request.form)
            dic["updated_by"] = user["first_name"]+" "+user["last_name"]
            update_old_description(id, dic)    
        else:
            return redirect(url_for("general.dashboard"))
        return redirect(url_for("general.dashboard"))

    for x in range(0, get_description_index(int(id))):
        desc = get_description(int(id), x)
        new_desc = {
            "updated_by": desc[0],
            "updated_at": desc[1],
            "description": desc[2],
            "vote_app": desc[3],
            "vote_den": desc[4]
        }
        descriptions.append(new_desc)
    
    return render_template('update_case.html', descriptions=descriptions, file_name=file_name)


@investigator.route('/vote_cases')
@investigator_required
@login_required
def vote_cases():
    user_id = session['user_id']
    user = db['users'].find_one({"_id": user_id})
    username = user["username"]
    cases = []
    for x in db['files'].find({}):
        case = get_case(x["index"])
        if case[3] == "pending":
            new_case = {
                "created_by": case[0],
                "created_at": case[1],
                "file_hash": case[2],
                "index": x["index"]
            }
            cases.append(new_case)
    return render_template('vote_cases.html', username=username, cases=cases)

@investigator.route('/vote_case/<id>', methods=['GET', 'POST'])
@investigator_required
@login_required
def vote_case(id):
    user_id = session['user_id']
    user = db['users'].find_one({"_id": user_id})
    file_name = db['files'].find_one({"index": int(id)})["file_name"]
    file = db['files'].find_one({"index": int(id)})
    descriptions = []
    case = get_lastDesc(id)
    if case[5] >= db['users'].count_documents({"accountType": "investigator"}):
        if case[3] > case[4]:
            change_status_approve(id)
            db["files"].update_one({"index":int(id)}, {"$unset": {"user" : ""}})

        else:
            change_status_denied(id)
            db["files"].update_one({"index":int(id)}, {"$unset": {"user" : ""}})


    case = get_case(int(id))

    if case[3] != "pending":
        return redirect(url_for("general.dashboard"))
    if request.method == "POST":
        if case[3] == "pending":
            if "users" in file:
                if user["first_name"] in file["users"]:
                    return redirect(url_for("general.dashboard"))
            if request.form["hello"] == "approve":
                approve_vote(id)
            if request.form["hello"] == "denie":
                denie_vote(id)        
            db["files"].update_one({"index": int(id)}, {"$push": {"user": user["first_name"]}})
        else:
            return redirect(url_for("general.dashboard"))
        return redirect(url_for("general.dashboard"))

    for x in range(0, get_description_index(int(id))):
        desc = get_description(int(id), x)
        new_desc = {
            "updated_by": desc[0],
            "updated_at": desc[1],
            "description": desc[2],
            "vote_app": desc[3],
            "vote_den": desc[4]
        }
        descriptions.append(new_desc)
    return render_template('vote_case.html', descriptions=descriptions, file_name=file_name)