"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MeetupSchema extends Schema {
  up() {
    this.create("meetups", table => {
      table.increments();
      table.string("title");
      table.text("description");
      table.string("location");
      table.string("img");
      table
        .integer("theme_id")
        .notNullable()
        .references("id")
        .inTable("preferences_base")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("meetups");
  }
}

module.exports = MeetupSchema;
