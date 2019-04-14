"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupRegistrationSchema extends Schema {
  up() {
    this.create("meetup_registrations", table => {
      table.increments();
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("meetup_id")
        .notNullable()
        .references("id")
        .inTable("meetups")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("meetup_registrations");
  }
}

module.exports = MeetupRegistrationSchema;
