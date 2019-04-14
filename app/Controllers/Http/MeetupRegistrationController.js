"use strict";

const MeetupRegistration = use("App/Models/MeetupRegistration");
const Meetup = use("App/Models/Meetup");

/**
 * Resourceful controller for interacting with meetupregistrations
 */
class MeetupRegistrationController {
  async store({ request }) {
    const data = request.only(["user_id", "meetup_id"]);

    const meetupRegistration = await MeetupRegistration.create(data);

    return meetupRegistration;
  }

  async show({ params }) {
    const listaMeetups = await MeetupRegistration.query()
      .where("user_id", params.id)
      .fetch();

    /* const meetupids = listaMeetups.map(function(elem) {
      return meetup_id;
    });

     return await Meetup.query()
      .where("id", elem.id)
      .fetch(); */

    /*const meetups = await Meetup.query()
      .where("id", a.id)
      .fetch();*/

    return listaMeetups;
  }
}

module.exports = MeetupRegistrationController;
