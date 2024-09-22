/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "@request.auth.id != \"\""

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qf9kdotn",
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
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_players.users.id = @request.auth.id"

  // remove
  collection.schema.removeField("qf9kdotn")

  return dao.saveCollection(collection)
})
