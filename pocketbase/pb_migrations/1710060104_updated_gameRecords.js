/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjl7h8py",
    "name": "gameId",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "mf4qeid35eli2tj",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjl7h8py",
    "name": "gameId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "mf4qeid35eli2tj",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
