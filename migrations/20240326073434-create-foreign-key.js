'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //foreign key for Users
    await queryInterface.addConstraint("containers", {
      fields: ["user_id"],
      type: "foreign key",
      name: "userId_fk",
      references: {
        table: "users",
        field: "user_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    //foreign key for shipments
    await queryInterface.addConstraint("shipments", {
      fields: ["user_id"],
      type: "foreign key",
      name: "userId_fk_shipment",
      references: {
        table: "users",
        field: "user_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    await queryInterface.addConstraint("shipments", {
      fields: ["container_id"],
      type: "foreign key",
      name: "contId_fk_shipment",
      references: {
        table: "containers",
        field: "container_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    await queryInterface.addConstraint("shipments", {
      fields: ["shipment_detail_id"],
      type: "foreign key",
      name: "shipdetailId_fk_shipment",
      references: {
        table: "shipment_details",
        field: "shipment_details_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    //Foreign key for Log activities tables
    await queryInterface.addConstraint("log_activities", {
      fields: ["user_id"],
      type: "foreign key",
      name: "userId_fk_log",
      references: {
        table: "users",
        field: "user_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    await queryInterface.addConstraint("log_activities", {
      fields: ["shipment_id"],
      type: "foreign key",
      name: "shipmentId_fk_log",
      references: {
        table: "shipments",
        field: "shipment_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    await queryInterface.addConstraint("log_activities", {
      fields: ["repair_id"],
      type: "foreign key",
      name: "repairId_fk_log",
      references: {
        table: "repairs",
        field: "repairs_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    //foreign key for repair
    await queryInterface.addConstraint("repairs", {
      fields: ["user_id"],
      type: "foreign key",
      name: "userId_fk_repair",
      references: {
        table: "users",
        field: "user_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

    await queryInterface.addConstraint("repairs", {
      fields: ["container_id"],
      type: "foreign key",
      name: "contId_fk_repair",
      references: {
        table: "containers",
        field: "container_id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })

  },

  async down (queryInterface, Sequelize) {
    
  }
};
