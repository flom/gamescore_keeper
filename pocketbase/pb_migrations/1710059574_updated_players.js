/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = "groupId.groupToUsers_via_groupId.userId = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrd3f6s4c3eemzh")

  collection.viewRule = null

  return dao.saveCollection(collection)
})