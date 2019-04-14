"use strict";

const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");
Route.post("preferences", "PreferenceController.store");
Route.post("createMeetup", "MeetupController.store");
Route.post("findMeetup", "MeetupController.findByTitle");
Route.post("RegisterUserMeetup", "MeetupRegistrationController.store");

Route.get("/meetups", "MeetupController.showAll");
Route.get("/meetup/:id", "MeetupController.show");
Route.get("/meetup/:id", "MeetupController.countMembers");
Route.get("myFutureMeetups/:id", "MeetupRegistrationController.show");

Route.put("/updateUser/:id", "UserController.update");
