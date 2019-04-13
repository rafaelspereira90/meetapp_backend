"use strict";

const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");
Route.post("preferences", "PreferenceController.store");

Route.get("/meetups", "MeetupController.showAll");
Route.get("/meetup/:id", "MeetupController.show");
