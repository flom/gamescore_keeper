/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  collection.viewRule = "@request.auth.id != \"\""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1i2rrwmk",
    "name": "group",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zcs2g3vts76cf7n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_gameRecords.users.id = @request.auth.id"

  // remove
  collection.schema.removeField("1i2rrwmk")

  return dao.saveCollection(collection)
})
