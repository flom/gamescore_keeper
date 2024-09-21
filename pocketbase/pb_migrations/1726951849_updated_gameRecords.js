/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  collection.viewRule = "@request.auth.id != \"\" && groups_via_gameRecords.users.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th3mzweyy0o2bp7")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
