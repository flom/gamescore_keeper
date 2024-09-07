/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7csvu4apyn4epux")

  // remove
  collection.schema.removeField("peazr4ag")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjfy6tqa",
    "name": "playerId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7csvu4apyn4epux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "peazr4ag",
    "name": "playerId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yrd3f6s4c3eemzh",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("jjfy6tqa")

  return dao.saveCollection(collection)
})
