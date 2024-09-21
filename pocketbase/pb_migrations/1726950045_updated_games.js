/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = null

  // remove
  collection.schema.removeField("76haohzb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = "groupId.groupToUsers_via_groupId.userId = @request.auth.id"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "76haohzb",
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
})
