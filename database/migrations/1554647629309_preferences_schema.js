"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PreferencesSchema extends Schema {
  up() {
    this.create("preferences", table => {
      table.increments();
      table
        .integer("user_id")
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("preference_id")
        .notNullable()
        .references("id")
        .inTable("preferences_base")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("preferences");
  }
}

module.exports = PreferencesSchema;
