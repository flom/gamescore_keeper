/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4xq3oso3",
    "name": "groupId",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zcs2g3vts76cf7n",
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

  // remove
  collection.schema.removeField("4xq3oso3")

  return dao.saveCollection(collection)
})
