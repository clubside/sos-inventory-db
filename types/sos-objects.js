/**
 * INTERNAL SOS API TYPE DEFINITIONS
 *
 * These typedefs describe the structure of SOS Inventory API payloads.
 * They are incomplete and NOT part of the public API contract.
 * They may change at any time.
 *
 * Do not import these from user code.
 */
/**
 * @typedef {Object} SOSAddress
 * @property {String} line1
 * @property {String} line2
 * @property {String} line3
 * @property {String} line4
 * @property {String} line5
 * @property {String} city
 * @property {String} postalCode
 * @property {String} country
 */
/**
 * @typedef {Object} SOSContact
 * @property {String} title
 * @property {String} firstName
 * @property {String} middleName
 * @property {String} lastName
 * @property {String} suffix
 */
/**
 * @typedef {Object} SOSCustomerTaxStatus
 * @property {Boolean} taxable
 * @property {String} taxExemptReasonId
 * @property {SOSTaxCode} taxCode
 */
/**
 * @typedef {Object} SOSCustomField
 * @property {Number} id
 * @property {String} name
 * @property {String} value
 * @property {String} dataType
 */
/**
 * @typedef {Object} SOSTaxCode
 * @property {Number} id
 * @property {String} name
 * @property {Boolean} active
 */
/**
 * @typedef {Object} SOSTaxInformation
 * @property {Boolean} taxable
 * @property {SOSTaxCode} taxCode
 */
/**
 * @typedef {Object} SOSTransaction
 * @property {Number} id
 * @property {String} transactionType
 * @property {String} refNumber
 * @property {Number} linenumber
 */
/**
 * @typedef {Object} SOSTransactionAddress
 * @property {String} company
 * @property {String} phone
 * @property {String} email
 * @property {String} addressName
 * @property {String} addressType
 * @property {SOSAddress} address
 */
