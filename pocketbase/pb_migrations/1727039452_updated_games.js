/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = "@request.auth.id != \"\""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0iix7p0w",
    "name": "group",
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
  const collection = dao.findCollectionByNameOrId("mf4qeid35eli2tj")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_games.users.id = @request.auth.id"

  // remove
  collection.schema.removeField("0iix7p0w")

  return dao.saveCollection(collection)
})
