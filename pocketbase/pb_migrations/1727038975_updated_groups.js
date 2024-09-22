/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  // remove
  collection.schema.removeField("v8ck4h4v")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zcs2g3vts76cf7n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v8ck4h4v",
    "name": "gameRecords",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "th3mzweyy0o2bp7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
