"use strict";

const Meetup = use("App/Models/Meetup");

class MeetupController {
  async store({ request }) {
    const data = request.only([
      "title",
      "description",
      "location",
      "img",
      "theme_id"
    ]);

    const meetup = await Meetup.create(data);

    return meetup;
  }

  async show({ params }) {
    const meetup = await Meetup.findOrFail(params.id);

    return meetup;
  }

  async showAll() {
    const meetups = await Meetup.all();

    return meetups;
  }

  async findByTitle({ request }) {
    const param = request.only(["title"]);
    const meetup = await Meetup.findByOrFail("title", param.title);

    return meetup;
  }

  /**
   * Render a form to update an existing meetup.
   * GET meetups/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update meetup details.
   * PUT or PATCH meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a meetup with id.
   * DELETE meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = MeetupController;
