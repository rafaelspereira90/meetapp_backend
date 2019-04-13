"use strict";

const Preference = use("App/Models/Preference");

class PreferenceController {
  async store({ request }) {
    const data = request.only(["user_id", "preference_id"]);

    const preference = await Preference.create(data);

    return preference;
  }
}

module.exports = PreferenceController;
