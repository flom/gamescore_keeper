/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnjcewd8dootkkp")

  // remove
  collection.schema.removeField("50rwqydt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnjcewd8dootkkp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "50rwqydt",
    "name": "gameRecordId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "th3mzweyy0o2bp7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
