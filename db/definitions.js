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
const sosObjects = {
	address: {
		fields: [
			{ name: 'line1', type: 'string' },
			{ name: 'line2', type: 'string' },
			{ name: 'line3', type: 'string' },
			{ name: 'line4', type: 'string' },
			{ name: 'line5', type: 'string' },
			{ name: 'city', type: 'string' },
			{ name: 'stateProvince', type: 'string' },
			{ name: 'postalCode', type: 'string' },
			{ name: 'country', type: 'string' }
		]
	},
	contact: {
		description: 'Contact information',
		fields: [
			{ name: 'title', type: 'string' },
			{ name: 'firstName', type: 'string' },
			{ name: 'middleName', type: 'string' },
			{ name: 'lastName', type: 'string' },
			{ name: 'suffix', type: 'string' }
		]
	},
	customerTaxStatus: {
		description: 'Tax Status and Tax Code Information.',
		fields: [
			{ name: 'taxable', type: 'boolean' },
			{ name: 'taxExemptReasonId', type: 'string' },
			{ name: 'taxCode', type: 'object', objectType: 'taxCode' }
		]
	},
	customField: {
		description: 'Custom fields follow the structure outlined below. On create or update transactions, the id, name, and datatype values cannot be updated.',
		fields: [
			{ name: 'id', type: 'integer' },
			{ name: 'name', type: 'string' },
			{ name: 'value', type: 'string' },
			{ name: 'dataType', type: 'string' }
		]
	},
	taxCode: {
		description: 'Tax Code Information.',
		fields: [
			{ name: 'id', type: 'integer' },
			{ name: 'name', type: 'string' },
			{ name: 'active', type: 'boolean' }
		]
	},
	taxInformation: {
		description: 'Tax information types are used to capture details on the taxability and tax code for a transaction or line.',
		fields: [
			{ name: 'taxable', type: 'boolean' },
			{ name: 'taxCode', type: 'object', objectType: 'taxCode' }
		]
	},
	transaction: {
		description: 'Linked transaction objects represent a transaction that is linked to the current transaction or line.',
		fields: [
			{ name: 'id', type: 'integer' },
			{ name: 'transactionType', type: 'string' },
			{ name: 'refNumber', type: 'string' },
			{ name: 'linenumber', type: 'integer' }
		]
	},
	transactionAddress: {
		description: 'Transaction addresses are used to represent the full address type in our system.',
		fields: [
			{ name: 'company', type: 'string' },
			{ name: 'phone', type: 'string' },
			{ name: 'email', type: 'string' },
			{ name: 'addressName', type: 'string' },
			{ name: 'addressType', type: 'string' },
			{ name: 'address', type: 'object', objectType: 'address' }
		]
	}
}

/**
 * @typedef {Object} SOSReference
 * @property {String} field - name of the reference field to use in the table
 * @property {String} property - name of the field's property to get the value
 * @property {String} sourceTable - name of the table where the reference can be found
 * @property {String} sourceField - name of the field in sourceTable where the reference value can be found
 */
/**
 * @typedef {Object} SOSSidecarField
 * @property {String} name - name of the field
 * @property {("string"|"integer"|"boolean"|"decimal"|"object"|"array"|"reference"|"timestamp")} type - database-agnostic datatype
 * @property {("new"|"object"|"row")} source - where the value for the field comes from
 * @property {String} [property] - name of the property in source to get the value
 * @property {Boolean} [autoIncrement] - whether the field should automatically increment
 */
/**
 * @typedef {Object} SOSSidecar
 * @property {String} table - name of the sidecar table
 * @property {SOSSidecarField[]} fields - fields for the sidecar
 * @property {String[]} primaryKey - array of field names to make up the table's primary key
 */
/**
 * @typedef {Object} SOSField
 * @property {String} name - name of the field
 * @property {String} description - description of the field
 * @property {("string"|"integer"|"boolean"|"decimal"|"object"|"array"|"reference"|"timestamp")} type - database-agnostic datatype
 * @property {Boolean} [readOnly] - whether the field is read only
 * @property {Object} [objectType] - definition object for nested SOS object types
 * @property {Boolean} [nulls] - whether the field allows nulls
 * @property {Boolean} [unique] - whether the field should have a UNIQUE constraint
 * @property {SOSReference} [reference] - virtual foreign key definition
 * @property {SOSSidecar} [sidecar] - sidecar table for this field
 */
/**
 * @typedef {Object} SOSAPIResult
 * @property {String} name - name of the result
 * @property {String} description - description of the result
 * @property {String} type - datatype of the result
 */
/**
 * @typedef {Object} SOSAPIParameter
 * @property {String} name - name of the parameter
 * @property {String} description - description of the parameter
 * @property {String} type - datatype of the parameter
 */
/**
 * @typedef {Object} SOSAPIEndpoint
 * @property {String} endpoint - name of the endpoint
 * @property {String} description - description of the endpoint
 * @property {("POST"|"GET"|"PUT"|"DELETE"")} method - API method
 * @property {SOSAPIResult[]} results - results of the API endpoint
 * @property {SOSAPIParameter[]} parameters - parameters of the API endpoint
 */
/**
 * @typedef {Object} SOSAPI
 * @property {SOSAPIEndpoint} [create] - create endpoint definition
 * @property {SOSAPIEndpoint} [query] - create endpoint definition
 * @property {SOSAPIEndpoint} [read] - read endpoint definition
 * @property {SOSAPIEndpoint} [update] - update endpoint definition
 * @property {SOSAPIEndpoint} [delete] - delete endpoint definition
 */
/**
 * @typedef {Object} SOSTable
 * @property {String} name - name of the table
 * @property {String} [sosObject] - name of the SOS Inventory API object
 * @property {String} description - description of the table
 * @property {Boolean} [primary] - whether the table should be grouped as part of SOS Inventory's Primary objects
 * @property {Boolean} [reference] - whether the table should be grouped as part of SOS Inventory's Reference objects
 * @property {SOSAPI} [api] - SOS Inventory API definition
 * @property {String} [sourceField] - field name to derive support table
 * @property {String[]} [sourceTables] - table name(s) to derive support table
 * @property {String} [destinationField] - field name to update
 * @property {String} [sosApiUrl] - link to SOS Inventory API developer page
 * @property {String} [sosHelpUrl] - link to SOS Inventory help page
 * @property {SOSField[]} fields - field definitions for the table
 * @property {String[]} primaryKey - array of field names to make up the table's primary key
 */
/** @type {SOSTable[]} */
exports.tables = [
	{
		name: 'accounts',
		sosObject: 'Account',
		description: 'This represents an account used for posting to an accounting system.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/account',
				description: 'Returns a list of account objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#account',
		sosHelpUrl: null,
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name on the account.',
				type: 'string'
			},
			{
				name: 'fullname',
				description: 'The full name on the account.',
				type: 'string'
			},
			{
				name: 'parentId',
				description: 'The id of the parent account, if one exists.',
				type: 'integer'
			},
			{
				name: 'sublevel',
				description: 'The number of levels down the account tree that this one belongs.',
				type: 'integer'
			},
			{
				name: 'accountType',
				description: 'The type of this account.',
				type: 'string'
			},
			{
				name: 'accountNumber',
				description: 'Account number assigned in QuickBooks, if numbering is enabled. Often null for accounts that do not use a numbering scheme.',
				type: 'string'
			},
			{
				name: 'syncMessage',
				description: 'Message returned by the most recent QuickBooks sync for this account. Typically null unless a sync warning or error occurred.',
				type: 'string'
			},
			{
				name: 'lastSync',
				description: 'Timestamp of the last time this account was synchronized with QuickBooks.',
				type: 'timestamp'
			},
			{
				name: 'description',
				description: 'Optional descriptive text for the account, usually imported from QuickBooks.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'adjustments',
		sosObject: 'Adjustment',
		description: 'Inventory adjustments allow you to modify the quantity and/or cost basis of inventory on hand. You should use inventory adjustments sparingly, as most often inventory will be added or removed through item receipts and shipments.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/adjustment',
				description: 'Returns a list of adjustment objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, id, comment, or location name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters results by whether transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Adjustment',
		sosHelpUrl: 'https://help.sosinventory.com/v8-adjustment-transaction-interaction',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The adjustment number for this record. If you wish to use the automatic numbering capability on creation of an adjustment, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'total',
				description: 'Total cost basis for this adjustment.',
				type: 'decimal'
			},
			{
				name: 'account',
				description: 'The adjustment account used for this transaction.',
				type: 'reference',
				reference: { field: 'accountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'The department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'forceSave',
				description: '',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the adjustment. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'adjustmentItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this adjustment line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'linenumber',
							description: 'The line number for this line on the adjustment transaction.',
							type: 'integer',
							source: 'object',
							property: 'linenumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'lot',
							description: 'The lot used for this item adjustment.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'bin',
							description: 'The bin used for this item adjustment.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantityDiff',
							description: 'The adjustment amount for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantityDiff'
						},
						{
							name: 'newQuantity',
							description: 'The new quantity for this item.',
							type: 'decimal',
							source: 'object',
							property: 'newQuantity'
						},
						{
							name: 'valueDiff',
							description: 'The cost basis adjustment for this line.',
							type: 'decimal',
							source: 'object',
							property: 'valueDiff'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'serials',
							description: 'The serials being adjusted for this item. You cannot add serials to inventory with adjustments.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'bins',
		sosObject: 'Bins',
		description: 'Bins provide a way of managing the place for each item within a given location. Bins are available on Plus plans and Pro plans.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/bins',
				description: 'Returns a list of bins objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#bins',
		sosHelpUrl: 'https://help.sosinventory.com/v8-bins',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'description',
				description: 'Optional descriptive text for this bin.',
				type: 'string'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The bin number.',
				type: 'string'
			},
			{
				name: 'location',
				description: 'Refers to this bin\'s location.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'sortOrder',
				description: 'The order position (e.g., 1, 2, or 3) which this bin holds in the sequential numbering of bins. The minimum value is 0, the maximum 9999. The default is 0. Typically, sort order pertains to the order of bins in a warehouse.',
				type: 'integer'
			},
			{
				name: 'contents',
				description: 'The current inventory stored in this bin.',
				type: 'array',
				sidecar: {
					table: 'binItems',
					fields: [
						{
							name: 'id',
							type: 'integer',
							source: 'row',
							autoIncrement: true
						},
						{
							name: 'binId',
							source: 'object',
							property: 'binId',
							type: 'integer'
						},
						{
							name: 'itemId',
							source: 'object',
							property: 'itemId',
							type: 'integer'
						},
						{
							name: 'name',
							source: 'object',
							property: 'name',
							type: 'string'
						},
						{
							name: 'quantity',
							source: 'object',
							property: 'quantity',
							type: 'decimal'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'builds',
		sosObject: 'Build',
		description: 'A build transaction uses raw materials to assemble a finished good. This transaction results in a decrease in the inventory of the raw materials and an increase in the inventory of the assembled item.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/build',
				description: 'Returns a list of build objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, id, comment, location name, or output item name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Build',
		sosHelpUrl: 'https://help.sosinventory.com/v9-builds-and-the-builds-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The build number for this record. If you wish to use the automatic numbering capability on creation of an build, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'job',
				description: 'The job for this line, if enabled.',
				type: 'reference',
				reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' }
			},
			{
				name: 'workcenter',
				description: 'The related work center for the job.',
				type: 'reference',
				reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'The department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this line.',
				type: 'object'
			},
			{
				name: 'linkedWorkOrder',
				description: 'The related work order for this build.',
				type: 'reference',
				reference: { field: 'linkedWorkOrderId', property: 'id', sourceTable: 'workOrders', sourceField: 'id' }
			},
			{
				name: 'comment',
				description: 'Comment field about transaction. For in-house use.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'total',
				description: 'Total inputs on this build.',
				type: 'decimal'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'outputs',
				description: 'The output line for this build. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'buildOutputItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this adjustment line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the adjustment transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'worker',
							description: 'The worker assigned to this line.',
							type: 'reference',
							reference: { field: 'workerId', property: 'id', sourceTable: 'workers', sourceField: 'id' },
							source: 'object',
							property: 'worker'
						},
						{
							name: 'tax',
							description: 'Unused',
							type: 'object',
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectType: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'notes',
							description: 'Notes for this build. Used on input lines.',
							type: 'string',
							source: 'object',
							property: 'notes'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'waste',
							description: 'Unused.',
							type: 'boolean',
							source: 'object',
							property: 'waste',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item build.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item build.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'lotExpiration',
							description: 'The date this lot expires.',
							type: 'timestamp',
							source: 'object',
							property: 'lotExpiration'
						},
						{
							name: 'serials',
							description: 'The serials being used or built for this item.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			},
			{
				name: 'inputs',
				description: 'The input lines for this build. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'buildInputItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this adjustment line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the adjustment transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'worker',
							description: 'The worker assigned to this line.',
							type: 'reference',
							reference: { field: 'workerId', property: 'id', sourceTable: 'workers', sourceField: 'id' },
							source: 'object',
							property: 'worker'
						},
						{
							name: 'tax',
							description: 'Unused',
							type: 'object',
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectType: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'notes',
							description: 'Notes for this build. Used on input lines.',
							type: 'string',
							source: 'object',
							property: 'notes'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'waste',
							description: 'Unused.',
							type: 'boolean',
							source: 'object',
							property: 'waste',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item build.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item build.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'lotExpiration',
							description: 'The date this lot expires.',
							type: 'timestamp',
							source: 'object',
							property: 'lotExpiration'
						},
						{
							name: 'serials',
							description: 'The serials being used or built for this item.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'channels',
		sosObject: 'Channel',
		description: 'The sales channels configured for this account.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/channel',
				description: 'Returns a list of channel objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#channel',
		sosHelpUrl: 'https://help.sosinventory.com/v8-channels-and-customer-types',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The channel name.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'classes',
		sosObject: 'Class',
		description: 'This represents the class used for class tracking.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/class',
				description: 'Returns a list of class objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#class',
		sosHelpUrl: 'https://help.sosinventory.com/v8-class-and-department-tracking',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The class name.',
				type: 'string'
			},
			{
				name: 'fullName',
				description: 'Fully qualified class name, including parent hierarchy if used.',
				type: 'string'
			},
			{
				name: 'syncMessage',
				description: 'Message returned by the most recent QuickBooks sync for this class.',
				type: 'string'
			},
			{
				name: 'lastSync',
				description: 'Timestamp of the last successful QuickBooks sync for this class.',
				type: 'timestamp'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'customers',
		sosObject: 'Customer',
		description: 'Represents a customer record used for sales, billing, shipping, pricing, tax configuration, and QuickBooks synchronization. Includes contact information, addresses, payment terms, pricing tier, tax settings, custom fields, and optional QuickBooks metadata such as sync status and stored payment token details.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/customer',
				description: 'Returns a list of customer objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: name, fullName, or notes.',
						type: 'string'
					},
					{
						name: 'name',
						description: 'This parameter will filter the results by matches of the name or fullname fields.',
						type: 'string'
					},
					{
						name: 'email',
						description: 'This parameter will filter the results by matches of the customer\'s email.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Customer',
		sosHelpUrl: 'https://help.sosinventory.com/v8-customer-management-and-the-customers-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided when creating a customer.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this customer has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be 1 color of star or 3 colors of star. See company setting in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name by which you look up this customer.',
				type: 'string'
			},
			{
				name: 'fullname',
				description: 'Customer name with parent added.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'parent',
				description: 'Refers to the parent customer of this customer record.',
				type: 'reference',
				reference: { field: 'parentId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'sublevel',
				description: 'The number of levels between this customer and the highest-level customer.',
				type: 'integer',
				readOnly: true
			},
			{
				name: 'email',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'website',
				description: 'Include the entire address, like "http://www.acompany.com".',
				type: 'string'
			},
			{
				name: 'phone',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'mobile',
				description: 'Mobile phone number for the customer. No specific format is enforced.',
				type: 'string'
			},
			{
				name: 'altPhone',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'fax',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'companyName',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'portalPassword',
				description: 'Password used by the customer to access the SOS customer portal, if enabled.',
				type: 'string'
			},
			{
				name: 'contact',
				description: 'Primary contact person associated with this customer, including name and title details.',
				type: 'object',
				objectType: sosObjects.contact
			},
			{
				name: 'billing',
				description: 'The customer\'s billing address.',
				type: 'object',
				objectType: sosObjects.address
			},
			{
				name: 'shipping',
				description: 'Customer\'s shipping address.',
				type: 'object',
				objectType: sosObjects.address
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'priceTier',
				description: 'The price tier to which this customer has been assigned.',
				type: 'reference',
				reference: { field: 'priceTierId', property: 'id', sourceTable: 'priceTiers', sourceField: 'id' }
			},
			{
				name: 'paymentMethod',
				description: 'The default method of payment for this customer.',
				type: 'reference',
				reference: { field: 'paymentMethodId', property: 'id', sourceTable: 'paymentMethods', sourceField: 'id' }
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this customer.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'customerType',
				description: 'Customer type classification assigned to this customer. May be a reference to a defined customer type or null if none is assigned.',
				type: 'reference'
			},
			{
				name: 'resaleNumber',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'contractorNumber',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'businessLicense',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'foundUsVia',
				description: 'The advertising or marketing avenue that led the customer to your business.',
				type: 'string'
			},
			{
				name: 'currency',
				description: 'Currency used for transactions with this customer when multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'tax',
				description: 'Taxability settings for this customer, including tax code and exempt‑reason details.',
				type: 'object',
				objectType: sosObjects.customerTaxStatus
			},
			{
				name: 'creditHold',
				description: 'True if customer is currently on credit hold, false if not.',
				type: 'boolean'
			},
			{
				name: 'billWithParent',
				description: 'True if customer is to be billed with the parent customer. If false, this customer will be billed separately.',
				type: 'boolean'
			},
			{
				name: 'notes',
				description: 'The company’s internal notes about the customer. These notes are not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'altAddresses',
				description: 'Additional saved addresses for this customer, used for internal reference or alternate shipping/billing destinations.',
				type: 'array',
				objectType: sosObjects.address
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasChildren',
				description: 'True if “child” customer records are associated with this customer, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'isInQuickBooks',
				description: 'Indicates whether this customer record exists in QuickBooks.',
				type: 'boolean'
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this customer, if syncronizing with Quickbooks.',
				type: 'timestamp',
				readOnly: true
			},
			{
				name: 'hasCardOnFile',
				description: 'Indicates whether a payment card token is stored for this customer.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lastFour',
				description: 'Last four digits of the customer’s stored payment card, if available.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'expMonth',
				description: 'Expiration month of the stored payment card.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'expYear',
				description: 'Expiration year of the stored payment card.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'tokenType',
				description: 'Type of stored payment token (e.g., credit card, ACH), if applicable.',
				type: 'string',
				readOnly: true
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'customFields',
		sosObject: 'Custom field',
		description: 'Custom fields allow additional data to be captured for object definitions and transactions.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/customfield',
				description: 'Returns a list of customfield objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#customfield',
		sosHelpUrl: 'https://help.sosinventory.com/v8-custom-fields',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name of the custom field.',
				type: 'string'
			},
			{
				name: 'dataType',
				description: 'The type of the custom field. One of Text, Boolean, List, Number, TextArea, Date, or Money.',
				type: 'string'
			},
			{
				name: 'showOn',
				description: 'Comma-separated list of the transactions on which this field is shown.',
				type: 'string'
			},
			{
				name: 'listValues',
				description: 'Comma-separated list of value, if data type is set to List.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'departments',
		sosObject: 'Department',
		description: 'This represents the department used for department tracking.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/department',
				description: 'Returns a list of department objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#department',
		sosHelpUrl: 'https://help.sosinventory.com/v8-class-and-department-tracking',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The department name.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'estimates',
		sosObject: 'Estimate',
		description: 'An estimate is a quotation to a customer, or an offer to provide products or services at a specified price. The terms of an estimate (binding, non-binding, etc.) are set by your company policies.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/estimate',
				description: 'Returns a list of estimate objects.',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters the results by void status.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'channel',
						description: 'Filters transactions according to the name of the channel.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Estimate',
		sosHelpUrl: 'https://help.sosinventory.com/v8-estimates-and-the-estimates-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a estimate, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction, if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'transactionLocationQuickBooks',
				description: 'QuickBooks location associated with this transaction, if applicable.',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'This comment is not visible to the customer on SOS-generated PDFs and emails, but the comment does appear on customer statements generated in QuickBooks.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountPercent',
				description: 'Discount percentage field.',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				description: 'Discount amount field.',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				description: 'Tax percentage field.',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				description: 'Tax amount field.',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				description: 'True if discount is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'True if shipping is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'status',
				description: 'The current status of the transaction. Options are "Accepted", "Pending", "Closed", or "Rejected".',
				type: 'string'
			},
			{
				name: 'acceptedBy',
				description: 'Name of customer representative who accepted this estimate.',
				type: 'string'
			},
			{
				name: 'acceptedDate',
				description: 'Date this estimate was accepted.',
				type: 'timestamp'
			},
			{
				name: 'expiration',
				description: 'Date this estimate expires.',
				type: 'timestamp'
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean'
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean'
			},
			{
				name: 'forceSave',
				description: 'If true, forces the record to save even if certain validation checks fail. Only used in specific workflows.',
				type: 'boolean'
			},
			{
				name: 'syncMessage',
				description: 'Reserved for future use.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this estimate, if syncronizing with Quickbooks.',
				type: 'timestamp',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the estimate. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'estimateItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this estimate line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the estimate transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'worker',
							description: 'The worker assigned to this line.',
							type: 'reference',
							reference: { field: 'workerId', property: 'id', sourceTable: 'workers', sourceField: 'id' },
							source: 'object',
							property: 'worker'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectType: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitprice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitprice',
							readOnly: true
						},
						{
							name: 'amount',
							description: 'The sales amount for this line item. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount',
							readOnly: true
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost',
							readOnly: true
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin',
							readOnly: true
						},
						{
							name: 'listprice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listprice',
							readOnly: true
						},
						{
							name: 'percentdiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentdiscount',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'invoices',
		sosObject: 'Invoice',
		description: 'An invoice is a bill to a customer requesting that they pay you a certain amount of money by a certain date.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/invoice',
				description: 'Returns a list of invoice objects.',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters the results by void status.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Invoice',
		sosHelpUrl: 'https://help.sosinventory.com/v8-invoices-and-the-invoices-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a invoice, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'terms',
				description: 'Payment terms of this invoice',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'dueDate',
				description: 'Date that payment is due for this invoice',
				type: 'timestamp'
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction, if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'linkedTransaction',
				description: 'Reference to the transaction this invoice is linked to, such as a sales order or fulfillment. Null when the invoice is standalone.',
				type: 'reference'
			},
			{
				name: 'linkedPayments',
				description: 'Array of payment records applied to this invoice. Contains only high‑level linkage information, not full payment objects.',
				type: 'array'
			},
			{
				name: 'sosPaymentLink',
				description: 'URL generated by SOS that allows the customer to pay this invoice online, when online payments are enabled.',
				type: 'string'
			},
			{
				name: 'transactionLocationQuickBooks',
				description: 'The QuickBooks location associated with this invoice, if location tracking is enabled in QuickBooks.',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'This comment is not visible to the customer on SOS-generated PDFs and emails, but the comment does appear on customer statements generated in QuickBooks.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'customerPO',
				description: 'Customer\'s purchase order number.',
				type: 'string'
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountPercent',
				description: 'Discount percentage field.',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				description: 'Tax percentage field.',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				description: 'Tax amount field.',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'balance',
				description: 'The remaining unpaid balance for this invoice after all applied payments and credits.',
				type: 'decimal'
			},
			{
				name: 'status',
				description: 'The current status of the invoice (e.g., Open, Paid, Partially Paid, Voided). Values vary based on SOS configuration.',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				description: 'Shipping carrier\'s tracking number.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'shipDate',
				description: 'Shipping amount field.',
				type: 'timestamp',
				readOnly: true
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for this return.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' },
				readOnly: true
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				description: 'True if discount is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'True if shipping is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'voided',
				description: 'True if the invoice has been voided; false otherwise.',
				type: 'boolean'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean'
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean'
			},
			{
				name: 'forceSave',
				description: 'Internal flag used by SOS to bypass certain validation rules during updates. Typically not required for standard API usage.',
				type: 'boolean'
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this invoice, if syncronizing with Quickbooks.',
				type: 'timestamp',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the invoice.',
				type: 'array',
				sidecar: {
					table: 'invoiceItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this estimate line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the invoice transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectType: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitprice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitprice',
							readOnly: true
						},
						{
							name: 'amount',
							description: 'The sales amount for this line item. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount',
							readOnly: true
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost',
							readOnly: true
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin',
							readOnly: true
						},
						{
							name: 'listprice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listprice',
							readOnly: true
						},
						{
							name: 'percentdiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentdiscount',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'itemReceipts',
		sosObject: 'Item Receipt',
		description: 'Items are received into inventory by creating item receipts.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/itemreceipt',
				description: 'Returns a list of item receipt objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/ItemReceipt',
		sosHelpUrl: 'https://help.sosinventory.com/v8-item-receipts-and-the-item-receipts-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this item receipt has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a item receipt, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'vendor',
				description: 'Vendor from which these items were received.',
				type: 'reference',
				reference: { field: 'vendorId', property: 'id', sourceTable: 'vendors', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location where these items were received.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this item receipt.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'vendorMessage',
				description: 'Vendor message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'Comment field about transaction. For in-house use.',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				description: 'Vendor notes field. For in-house use.',
				type: 'string'
			},
			{
				name: 'payment',
				description: 'Method used to pay for these items. Must be one of "None", "Bill", "CashPurchase", "Check", "CreditCardCharge".',
				type: 'string'
			},
			{
				name: 'vendorInvoiceDate',
				description: 'The invoice date provided by the vendor for this receipt, if supplied.',
				type: 'timestamp'
			},
			{
				name: 'vendorInvoiceDueDate',
				description: 'The due date of the vendor’s invoice associated with this receipt, if supplied.',
				type: 'timestamp'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'taxAmount',
				description: 'The total tax amount calculated for this item receipt.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'overhead',
				description: 'Applies a specified percentage of overhead to each item.',
				type: 'decimal'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean'
			},
			{
				name: 'updateDefaultCosts',
				description: 'When true, SOS will update the item’s default cost based on the costs in this receipt.',
				type: 'boolean'
			},
			{
				name: 'autoSerialLots',
				description: 'Set to true to generate serial or lot numbers automatically when receiving such items.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the item receipt. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'itemReceiptItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this estimate line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the invoice transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'vendorPartNumber',
							description: 'The item this line represents.',
							type: 'string',
							source: 'object',
							property: 'vendorPartNumber'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'customer',
							description: 'The customer this line item is targeted for, if any.',
							type: 'reference',
							reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' },
							source: 'object',
							property: 'customer'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectType: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitprice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitprice'
						},
						{
							name: 'amount',
							description: 'The sales amount for this line item. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'received',
							description: 'The quantity of this line item that was received.',
							type: 'decimal',
							source: 'object',
							property: 'received',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin to which this line item is assigned.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot to which this line item is assigned.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'lotExpiration',
							description: 'The date this lot expires.',
							type: 'timestamp',
							source: 'object',
							property: 'lotExpiration'
						},
						{
							name: 'serials',
							description: 'The serial number(s) assigned to an item.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'items',
		sosObject: 'Item',
		description: 'Items are the most important pieces of data in SOS Inventory. They drive everything else in the system. Items can represent almost anything—they do not have to be things stored in inventory. An item is simply something you want to track in SOS Inventory. Examples include a product you sell, a service you provide, raw materials you use in manufacturing, and your overhead expenses.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/item',
				description: 'Returns a list of item objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the item will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: fullName, description, notes, barcode, sku, vendorPartNumber, or tags.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'sku',
						description: 'Search for a single SKU.',
						type: 'string'
					},
					{
						name: 'tags',
						description: 'Returns records that match the provided comma separated list of tags.',
						type: 'string'
					},
					{
						name: 'type',
						description: 'Returns records that match the provided item type.',
						type: 'string'
					},
					{
						name: 'ids',
						description: 'Filters the results by a list of item ids. Example: ids=1,2,3',
						type: 'string'
					},
					{
						name: 'location',
						description: 'Filters items according to the name of the location. This will also cause the inventory quantity values to reflect the totals at this location.',
						type: 'string'
					},
					{
						name: 'category',
						description: 'Filters items according to the category name.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Item',
		sosHelpUrl: 'https://help.sosinventory.com/v8-items-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this item has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name of this item. Must be unique within its category.',
				type: 'string'
			},
			{
				name: 'fullname',
				description: 'The full name of this item, which is [category]:[item-name]. Note that categories can be arbitrarily deep, so this field may look like [category]:[category]:[item-name] and so on.',
				type: 'string'
			},
			{
				name: 'description',
				description: 'Default description of this item.',
				type: 'string'
			},
			{
				name: 'sku',
				description: 'Stockkeeping unit. A product identification code.',
				type: 'string'
			},
			{
				name: 'barcode',
				description: 'The string of digits represented by the item\'s barcode.',
				type: 'string'
			},
			{
				name: 'type',
				description: 'The kind of item. Must be one of the following: "Inventory Item", "Non-inventory", "Category", "Expense", "Assembly", "Kit", "Service", "Labor", "Overhead", or "Other".',
				type: 'string'
			},
			{
				name: 'url',
				description: 'URL to a web page about this item.',
				type: 'string'
			},
			{
				name: 'tags',
				description: 'Comma-separated list of tags for this item.',
				type: 'string'
			},
			{
				name: 'notes',
				description: 'Any relevant notes for this item.',
				type: 'string'
			},
			{
				name: 'purchaseDescription',
				description: 'The item description as it appears on purchasing documents.',
				type: 'string'
			},
			{
				name: 'vendorPartNumber',
				description: 'Used if vendor\'s part number for the item differs from yours.',
				type: 'string'
			},
			{
				name: 'customerPartNumber',
				description: 'Used if the item is sold only to a small number of customers who refer to it by a different part number than yours.',
				type: 'string'
			},
			{
				name: 'vendor',
				description: 'The company or individual from whom you purchase this item.',
				type: 'reference',
				reference: { field: 'vendorId', property: 'id', sourceTable: 'vendors', sourceField: 'id' }
			},
			{
				name: 'bin',
				description: 'Bin where this item is stored.',
				type: 'reference',
				reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' }
			},
			{
				name: 'warranty',
				description: 'Description of the warranty for this item.',
				type: 'string'
			},
			{
				name: 'category',
				description: 'Category to which this item belongs.',
				type: 'reference',
				reference: { field: 'categoryId', property: 'id', sourceTable: 'categories', sourceField: 'id' }
			},
			{
				name: 'class',
				description: 'Class to which this item belongs.',
				type: 'reference',
				reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' }
			},
			{
				name: 'incomeAccount',
				description: 'Account to which income from this item should be posted.',
				type: 'reference',
				reference: { field: 'incomeAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'cogsAccount',
				description: 'Account to which the cost of this item should be posted when it is sold.',
				type: 'reference',
				reference: { field: 'cogsAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'assetAccount',
				description: 'Account where this item is represented as an asset.',
				type: 'reference',
				reference: { field: 'assetAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'expenseAccount',
				description: 'Account to which the cost of this item should be posted when it is purchased.',
				type: 'reference',
				reference: { field: 'expenseAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'onhand',
				description: 'Quantity of this item currently in inventory.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'available',
				description: 'Quantity of this item available for sale.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'onSO',
				description: 'Quantity of this item on currently open sales orders.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'onSR',
				description: 'Quantity of this item on currently open sales receipts.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'rented',
				description: 'The quantity of this item currently rented to customers.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'onWO',
				description: 'Quantity of this item on currently open work orders.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'onPO',
				description: 'Quantity of this item on currently open purchase orders.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'onRMA',
				description: 'Quantity of this item on currently open return merchandise authorizations.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'reorderPoint',
				description: 'Inventory level at which this item should be reordered.',
				type: 'decimal'
			},
			{
				name: 'maxStock',
				description: 'Maximum quantity of this item you wish to have on hand.',
				type: 'decimal'
			},
			{
				name: 'leadTime',
				description: 'Lead time (in days) to receive this product after ordering it.',
				type: 'string'
			},
			{
				name: 'salesPrice',
				description: 'Calculated sales price based on if you are using markup pricing. If you are not using markup pricing, this is the baseSalesPrice.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'baseSalesPrice',
				description: 'Non-markup sales price for this item. This isn\'t needed if using markup pricing.',
				type: 'decimal'
			},
			{
				name: 'markupPercent',
				description: 'The percentage to mark up the salesPrice from the purchaceCost or COGS if useMarkup is enabled.',
				type: 'decimal'
			},
			{
				name: 'useMarkup',
				description: 'If true, use markupPercent to calculate salesPrice. If false, use baseSalesPrice for salesPrice.',
				type: 'boolean'
			},
			{
				name: 'minimumPrice',
				description: 'Minimum price at which you are willing to sell this item.',
				type: 'decimal'
			},
			{
				name: 'basePurchaseCost',
				description: 'The purchase cost of this item, taking into account optional default vendor pricing and bill of materials cost.',
				type: 'decimal'
			},
			{
				name: 'purchaseCost',
				description: 'The purchase cost on the item record.',
				type: 'decimal'
			},
			{
				name: 'costBasis',
				description: 'The total actual value for the current stock of an item.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'weight',
				description: 'Self-explanatory.',
				type: 'decimal'
			},
			{
				name: 'volume',
				description: 'Self-explanatory.',
				type: 'decimal'
			},
			{
				name: 'suggestedQuantity',
				description: 'System‑calculated suggested reorder quantity based on on‑hand, on‑order, and reorderPoint/maxStock settings.',
				type: 'decimal'
			},
			{
				name: 'weightUnit',
				description: 'Can be either "lb", "oz", "kg", or "g".',
				type: 'string'
			},
			{
				name: 'volumeUnit',
				description: 'Must be "cbm" (cubic meters).',
				type: 'string'
			},
			{
				name: 'sublevel',
				description: 'The number of levels between this item and the highest-level item.',
				type: 'integer',
				readOnly: true
			},
			{
				name: 'taxable',
				description: 'True if item is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'salesTaxCode',
				description: 'Default sales tax code. Non-US users only.',
				type: 'reference',
				reference: { field: 'salesTaxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'purchaseTaxCode',
				description: 'Default purchase tax code. Non-US users only.',
				type: 'reference',
				reference: { field: 'purchaseTaxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'willSync',
				description: 'True if item should be synced with an external accounting system, false if not.',
				type: 'boolean'
			},
			{
				name: 'updateShopify',
				description: 'True if item updates should be synced back to Shopify, if the account is connected to Shopify.',
				type: 'boolean'
			},
			{
				name: 'updateBigCommerce',
				description: 'True if item updates should be synced back to Big Commerce, if the account is connected to Big Commerce.',
				type: 'boolean'
			},
			{
				name: 'alwaysShippable',
				description: 'True if item should be shown on shipments, regardless of item type. False if not.',
				type: 'boolean'
			},
			{
				name: 'hasImage',
				description: 'True if item a product image is available for this item, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'serialTracking',
				description: 'True if serial numbers will be tracked for this item, false if not.',
				type: 'boolean'
			},
			{
				name: 'lotTracking',
				description: 'True if lot numbers will be tracked for this item, false if not.',
				type: 'boolean'
			},
			{
				name: 'archived',
				description: 'True if item has been archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'showOnSalesForms',
				description: 'True if item should show on sales forms, false if not.',
				type: 'boolean'
			},
			{
				name: 'showOnPurchasingForms',
				description: 'True if item should show on purchasing forms, false if not.',
				type: 'boolean'
			},
			{
				name: 'showOnManufacturingForms',
				description: 'True if item should show on manufacturing forms, false if not.',
				type: 'boolean'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'uoms',
				description: 'The list of units of measure that can be used with this item.',
				type: 'array',
				readOnly: true
			},
			{
				name: 'priceTiers',
				description: 'The list of price tiers used for pricing this item.',
				type: 'array',
				readOnly: true
			},
			{
				name: 'locationBins',
				description: 'List of bin assignments for this item across all locations.',
				type: 'array'
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'imageAsBase64String',
				description: 'Binary image of this item, encoded as a Base64 string. This is only populated on a Read call, not on Query calls.',
				type: 'string'
			},
			{
				name: 'imageChanged',
				description: 'True if a new item image is being sent with this create or update transaction. False if not.',
				type: 'boolean'
			},
			{
				name: 'pictureFile',
				description: 'Filename of the uploaded product image when sending an image during create/update operations.',
				type: 'string'
			},
			{
				name: 'hasVariants',
				description: 'True if this item is a variant master or has variant children.',
				type: 'boolean'
			},
			{
				name: 'variantMaster',
				description: 'Object containing the master item information when this item is a variant; empty/null if this item is the master.',
				type: 'object'
			},
			{
				name: 'commissionRate',
				description: 'Commission percentage applied when this item is sold, if commission tracking is enabled',
				type: 'decimal'
			},
			{
				name: 'commissionAmount',
				description: 'Flat commission amount applied when this item is sold, if commission tracking is enabled',
				type: 'decimal'
			},
			{
				name: 'commissionExempt',
				description: 'True if this item is exempt from commission calculations.',
				type: 'boolean'
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this item, if syncronizing with Quickbooks.',
				type: 'timestamp',
				readOnly: true
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'jobs',
		sosObject: 'Job',
		description: 'Jobs, available on the Pro Plan of SOS Inventory, provide a convenient way to organize groups of transactions. Each job--and even each stage of a job--can have its own profit-and-loss statement, showing precisely how much money was made or lost on a given set',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/job',
				description: 'Returns a list of job objects.',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters the result by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Job',
		sosHelpUrl: 'https://help.sosinventory.com/v8-jobs',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name for this job.',
				type: 'string'
			},
			{
				name: 'number',
				description: 'The job number for this record. If you wish to use the automatic numbering capability on the creation of a job, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'description',
				description: 'The description for this job.',
				type: 'string'
			},
			{
				name: 'closed',
				description: 'True if the job is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'customer',
				description: 'Customer for this job.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'address',
				description: 'The customer’s shipping address for this job.',
				type: 'object',
				objectType: sosObjects.address
			},
			{
				name: 'workcenters',
				description: 'The list of work centers for this job. The sequence indicates the order the job moves through the work centers. If creating a job, the Finished Goods work center will always be added as the last work center for you.',
				type: 'array'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'locations',
		sosObject: 'Location',
		description: 'The defined locations for the account. The Companion Plan allows only one location.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/location',
				description: 'Returns a list of location objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#location',
		sosHelpUrl: 'https://help.sosinventory.com/v8-locations',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The location name.',
				type: 'string'
			},
			{
				name: 'binTracking',
				description: 'True if location is bin tracked, false if not.',
				type: 'boolean'
			},
			{
				name: 'nonNettable',
				description: 'Indicates whether inventory stored at this location is excluded from nettable stock calculations.',
				type: 'boolean'
			},
			{
				name: 'defaultLocation',
				description: 'True if this is the default location for new items and transactions.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'Indicates whether shipping charges from this location are taxable.',
				type: 'boolean'
			},
			{
				name: 'bins',
				description: 'The bins setup for this location, if bin tracking is enabled.',
				type: 'array',
				sidecar: {
					table: 'locationBins',
					fields: [
						{
							name: 'id',
							type: 'integer',
							source: 'new',
							autoIncrement: true
						},
						{
							name: 'locationId',
							source: 'row',
							property: 'id',
							type: 'integer'
						},
						{
							name: 'binId',
							source: 'object',
							property: 'id',
							type: 'integer'
						},
						{
							name: 'name',
							source: 'object',
							property: 'name',
							type: 'string'
						}
					],
					primaryKey: ['id']
				}
			},
			{
				name: 'address',
				description: 'The address for this location. See example for address fields.',
				type: 'object',
				objectType: sosObjects.address
			},
			{
				name: 'phone',
				description: 'The phone number for this location.',
				type: 'string'
			},
			{
				name: 'email',
				description: 'The email for this location.',
				type: 'string'
			},
			{
				name: 'company',
				description: 'The company for this location.',
				type: 'string'
			},
			{
				name: 'contact',
				description: 'The contact for this location.',
				type: 'string'
			},
			{
				name: 'salesTaxRate',
				description: 'The default sales tax rate for this location.',
				type: 'decimal'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'lots',
		sosObject: 'Lot',
		description: 'Lot tracking is used to track batches or groups of a specific item.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/lot',
				description: 'Returns a list of lot objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, description, or item name.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is expired or recalled.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'location',
						description: 'This parameter will cause the inventory quantity values to reflect the lot totals at this location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Lot',
		sosHelpUrl: 'https://help.sosinventory.com/v8-lots',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The lot identifier.',
				type: 'string'
			},
			{
				name: 'item',
				description: 'The item associated with this lot.',
				type: 'reference',
				reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' }
			},
			{
				name: 'description',
				description: 'Description of this lot.',
				type: 'string'
			},
			{
				name: 'expiration',
				description: 'True if lot has expired, false if not.',
				type: 'timestamp'
			},
			{
				name: 'recalled',
				description: 'True if lot has been recalled, false if not.',
				type: 'boolean'
			},
			{
				name: 'expired',
				description: 'Has this lot expired?',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'onHand',
				description: 'Quantity of this lot currently in inventory.',
				type: 'decimal'
			},
			{
				name: 'available',
				description: 'Quantity of this lot currently available for sale.',
				type: 'decimal'
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'orderStages',
		sosObject: 'Order stage',
		description: 'The stages through which an order proceeds to completion.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/orderstage',
				description: 'Returns a list of orderstage objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#orderstage',
		sosHelpUrl: 'https://help.sosinventory.com/v8-order-stages-and-priorities',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The order stage name.',
				type: 'string'
			},
			{
				name: 'customerText',
				description: 'Text shown to customers in the customer portal when an order is in this stage.',
				type: 'string'
			},
			{
				name: 'sortOrder',
				description: '- The display order for this stage. Lower numbers appear first.',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'paymentMethods',
		sosObject: 'Payment method',
		description: 'Configured payment method types.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/paymentmethod',
				description: 'Returns a list of paymentmethod objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#paymentmethod',
		sosHelpUrl: 'https://help.sosinventory.com/v8-payment-methods-and-terms',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The payment method name.',
				type: 'string'
			},
			{
				name: 'sosPayType',
				description: 'Internal SOS classification for payment processing integrations. Often blank.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'pickTickets',
		description: 'A pick ticket gives instructions to your warehouse to pull certain items, quantities, serial numbers, lot numbers, etc. Pick tickets do NOT remove items from inventory.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/pickticket',
				description: 'Returns a list of pick ticket objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the pick ticket will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customer name, or location name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'channel',
						description: 'The name of a channel to filter the transactions.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'This will filter the results by closed or open status.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosObject: 'Pick Ticket',
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/PickTicket',
		sosHelpUrl: 'https://help.sosinventory.com/v8-pick-tickets-and-pick-tickets-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a pick ticket, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction is assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for this transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'Shipping carrier\'s tracking number.',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this pick ticket.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'closed',
				description: '',
				type: 'boolean'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'pickBy',
				description: 'Date by which this order should be picked.',
				type: 'timestamp'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean'
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean'
			},
			{
				name: 'lines',
				description: 'The lines for the pick ticket. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'pickTicketItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the pick ticket transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity of this item for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'lot',
							description: 'The lot used for this line item.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'bin',
							description: 'The bin used for this line item.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'serials',
							description: 'Serial number references for this line item.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'priceTiers',
		sosObject: 'Price tier',
		description: 'The configured price tiers. Available on Plus and Pro plans.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/pricetier',
				description: 'Returns a list of pricetier objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#pricetier',
		sosHelpUrl: 'https://help.sosinventory.com/v8-price-tiers-price-groups',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The price tier name.',
				type: 'string'
			},
			{
				name: 'percentDiscount',
				description: 'Percentage discount applied to all item prices in this tier.',
				type: 'decimal'
			},
			{
				name: 'flatDiscount',
				description: 'Flat amount discounted from all item prices in this tier.',
				type: 'decimal'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'priorities',
		sosObject: 'Priority',
		description: 'The configured priority states.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/priority',
				description: 'Returns a list of priority objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#priority',
		sosHelpUrl: 'https://help.sosinventory.com/v8-order-stages-and-priorities',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The priority name.',
				type: 'string'
			},
			{
				name: 'sortOrder',
				description: 'The display order for this priority within SOS. Lower numbers appear first.',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'processes',
		sosObject: 'Process',
		description: 'Processes in SOS Inventory can have an unlimited number of inputs and outputs. This gives you the flexibility to handle not only simple manufacturing (multiple inputs into one output) but also disassembly (where one input produces many outputs) and processes with by-products (multiple inputs into multiple outputs).',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/process',
				description: 'Returns a list of process objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, id, comment, location name, or process name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Process',
		sosHelpUrl: 'https://help.sosinventory.com/v8-processes-and-the-processes-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The process number for this record. If you wish to use the automatic numbering capability on creation of an process, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'startDate',
				description: 'Start date for this transaction.',
				type: 'timestamp'
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'job',
				description: 'The job for this line, if enabled.',
				type: 'reference',
				reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' }
			},
			{
				name: 'workcenter',
				description: 'The related work center for the job.',
				type: 'reference',
				reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'The department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this line.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'linkedWorkOrders',
				description: 'Array of Work Orders linked to this Process as part of the production workflow.',
				type: 'array'
			},
			{
				name: 'comment',
				description: 'Comment field about transaction. For in-house use.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'total',
				description: 'Total inputs on this process.',
				type: 'decimal'
			},
			{
				name: 'yield',
				description: 'The production yield for this Process step, expressed as a decimal ratio.',
				type: 'decimal'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'template',
				description: 'The template used to create this transaction. The API currently does not support creating a transaction from a template.',
				type: 'reference'
			},
			{
				name: 'multiplier',
				description: 'The multiplier factor used to modify this transaction. Setting this value does not change anything on this transaction. It is used only as a reference for the multiplier used.',
				type: 'decimal'
			},
			{
				name: 'outputs',
				description: 'The output line for this process.',
				type: 'array',
				sidecar: {
					table: 'processOutputItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the process transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'worker',
							description: 'The worker assigned to this line.',
							type: 'reference',
							reference: { field: 'workerId', property: 'id', sourceTable: 'workers', sourceField: 'id' },
							source: 'object',
							property: 'worker'
						},
						{
							name: 'tax',
							description: 'Unused.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'notes',
							description: 'Unused.',
							type: 'string',
							source: 'object',
							property: 'notes'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'waste',
							description: 'True if this process produces waste, false if not.',
							type: 'boolean',
							source: 'object',
							property: 'waste',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			},
			{
				name: 'inputs',
				description: 'The input lines for this process.',
				type: 'array',
				sidecar: {
					table: 'processInputItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the process transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'worker',
							description: 'The worker assigned to this line.',
							type: 'reference',
							reference: { field: 'workerId', property: 'id', sourceTable: 'workers', sourceField: 'id' },
							source: 'object',
							property: 'worker'
						},
						{
							name: 'tax',
							description: 'Unused.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'notes',
							description: 'Unused.',
							type: 'string',
							source: 'object',
							property: 'notes'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'waste',
							description: 'True if this process produces waste, false if not.',
							type: 'boolean',
							source: 'object',
							property: 'waste',
							readOnly: true
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'purchaseOrders',
		sosObject: 'Purchase Order',
		description: 'A purchase order is a document requesting that a vendor provide a good or service in exchange for payment.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/purchaseorder',
				description: 'Returns a list of purchase order objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, vendor name, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/PurchaseOrder',
		sosHelpUrl: 'https://help.sosinventory.com/v8-purchase-order-field-descriptions',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this item receipt has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a item receipt, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'vendor',
				description: 'Vendor from which these items were received.',
				type: 'reference',
				reference: { field: 'vendorId', property: 'id', sourceTable: 'vendors', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location where these items were stored.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'The vendor\'s billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'The address to which the items should be shipped.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction has been assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction, if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this purchase order. Must be an estimate transaction.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'vendorMessage',
				description: 'Vendor message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the vendor.',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				description: 'Vendor notes field. For in-house use.',
				type: 'string'
			},
			{
				name: 'expectedDate',
				description: 'Anticipated date for receiving these items.',
				type: 'timestamp'
			},
			{
				name: 'expectedShip',
				description: 'Anticipated items’ ship date from vendor.',
				type: 'timestamp'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'taxAmount',
				description: 'Tax on this order.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'dropShip',
				description: 'True if order is to be drop shipped to a customer, false if not.',
				type: 'boolean'
			},
			{
				name: 'blanketPO',
				description: 'True if transaction is a blanket purchase order, false if not.',
				type: 'boolean'
			},
			{
				name: 'contractManufacturing',
				description: 'True if order is for contract manufacturing, false if not.',
				type: 'boolean'
			},
			{
				name: 'confirmed',
				description: 'True if purchase order has been confirmed with the vendor, false if not.',
				type: 'boolean'
			},
			{
				name: 'closed',
				description: 'True if order is closed, false if not.',
				type: 'boolean'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'pendingApproval',
				description: 'True if purchase order is awaiting approval, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this purchase order, if syncronizing with Quickbooks.',
				type: 'timestamp'
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string'
			},
			{
				name: 'lines',
				description: 'The lines for the purchase order.',
				type: 'array',
				sidecar: {
					table: 'purchaseOrderItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this purchase order line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the purchase order transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'vendorPartNumber',
							description: 'The item this line represents.',
							type: 'string',
							source: 'object',
							property: 'vendorPartNumber'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'customer',
							description: 'The customer this line item is targeted for, if any.',
							type: 'reference',
							reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' },
							source: 'object',
							property: 'customer'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The purchase amount for this line item. The amount must equal the quantity multiplied by the unit',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'received',
							description: 'The quantity of this line item that was received.',
							type: 'decimal',
							source: 'object',
							property: 'received'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'lotExpiration',
							description: 'Unused',
							type: 'timestamp',
							source: 'object',
							property: 'lotExpiration'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rentalReturns',
		sosObject: 'Rental Return',
		description: 'Rental return transactions record the return of items previously rented by a customer and documented using a rental transaction.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/rentalreturn',
				description: 'Returns a list of rental return objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'fromLocation',
						description: 'Filters rental records according to the name of the originating location.',
						type: 'string'
					},
					{
						name: 'toLocation',
						description: 'Filters rental records according to the name of the destination location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/RentalReturn',
		sosHelpUrl: 'https://help.sosinventory.com/v8-rental-and-rental-return-field-descriptions',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a sales order, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'fromLocation',
				description: 'Location from which these items were shipped.',
				type: 'reference',
				reference: { field: 'fromLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'toLocation',
				description: 'The location of the return destination.',
				type: 'reference',
				reference: { field: 'toLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'Shipping carrier\'s tracking number.',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this rental return.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The line items for this rental return.',
				type: 'array',
				sidecar: {
					table: 'rentalReturnItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The rental amount for this line. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'the number of items invoiced on this line',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'The due date for this line.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'Bin from which this item was shipped.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						},
						{
							name: 'toBin',
							description: 'Bin to which this item was returned.',
							type: 'reference',
							reference: { field: 'toBinId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'toBin'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rentals',
		sosObject: 'Rental',
		description: 'Rental transactions record the renting of an inventory item by a customer.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/rental',
				description: 'Returns a list of rental objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'fromLocation',
						description: 'Filters rental records according to the name of the originating location.',
						type: 'string'
					},
					{
						name: 'toLocation',
						description: 'Filters rental records according to the name of the destination location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Rental',
		sosHelpUrl: 'https://help.sosinventory.com/v8-rentals-and-the-rentals-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a sales order, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'fromLocation',
				description: 'The name of the originating location.',
				type: 'reference',
				reference: { field: 'fromLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'toLocation',
				description: 'The name of the return destination.',
				type: 'reference',
				reference: { field: 'toLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User this transaction is assigned to.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'orderStage',
				description: 'The order stage of this transaction.',
				type: 'reference',
				reference: { field: 'orderStageId', property: 'id', sourceTable: 'orderStages', sourceField: 'id' }
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction if multicurrency is enabled',
				type: 'reference'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this rental.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'statusMessage',
				description: 'Status message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'customerPO',
				description: 'Customer purchase order field.',
				type: 'string'
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountPercent',
				description: 'Discount percentage field.',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				description: 'Discount amount field.',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				description: 'Tax amount field.',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountTaxable',
				description: 'True if discount is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'True if shipping is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'dropShip',
				description: 'True if order is to be drop shipped, false if not.',
				type: 'boolean'
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'statusLink',
				description: 'Link to OrderFacts page for this transaction, if enabled.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the rental. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'rentalItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this rental line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the rental transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The rental amount for this line. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'the number of items invoiced on this line',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'The due date for this line.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'Bin from which this item was shipped.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						},
						{
							name: 'toBin',
							description: 'Bin to which this item was returned.',
							type: 'reference',
							reference: { field: 'toBinId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'toBin'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'returns',
		sosObject: 'Return',
		description: 'A return transaction is to an RMA what an item receipt is to a PO. It is a record that you actually received the goods from a customer.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/return',
				description: 'Returns a list of return objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions by location name.',
						type: 'string'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Return',
		sosHelpUrl: 'https://help.sosinventory.com/v8-returns-and-the-returns-list',
		fields: [
			{
				name: 'populateFromObjectType',
				description: '',
				type: 'string'
			},
			{
				name: 'populateFromId',
				description: '',
				type: 'integer'
			},
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a return, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency for this transaction.',
				type: 'reference'
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for this return.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'The carrier\'s tracking number for this return.',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this line.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'shipBy',
				description: 'Date by which this order should be shipped.',
				type: 'timestamp'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount for this transaction.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean'
			},
			{
				name: 'lines',
				description: 'The lines for this return.',
				type: 'array',
				sidecar: {
					table: 'returnItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this return line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on this return transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The rental amount for this line. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'the number of items invoiced on this line',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'The due date for this line.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'Bin from which this item was shipped.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'returnsToVendor',
		sosObject: 'Return To Vendor',
		description: 'A return to vendor, or RTV, is a transaction in which goods are returned due to an erroneous shipment or damage during delivery.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/returntovendor',
				description: 'Returns a list of return to vendor objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, id, comment, vendor name, or location name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/ReturnToVendor',
		sosHelpUrl: 'https://help.sosinventory.com/v8-returns-to-vendors-rtvs',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this item receipt has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a item receipt, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'vendor',
				description: 'Vendor from which these items were received.',
				type: 'reference',
				reference: { field: 'vendorId', property: 'id', sourceTable: 'vanedors', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location where these items were stored.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'account',
				description: 'Account to which the transaction amount should be debited.',
				type: 'reference',
				reference: { field: 'accountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departmets', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'The carrier\'s tracking number for this RTV.',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this RTV.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the vendor.',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				description: 'Field for internal notes about vendor.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'total',
				description: 'Transaction total',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'createVendorCredit',
				description: 'Send a vendor credit to accounting software?',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for this RTV. See object structure below.',
				type: 'array',
				sidecar: {
					table: 'returnToVendorItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this RTV item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the RTV transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'vendorPartNumber',
							description: 'Self-explanatory.',
							type: 'string',
							source: 'object',
							property: 'vendorPartNumber'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'customer',
							description: 'The customer this line item is targeted for, if any.',
							type: 'reference',
							reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' },
							source: 'object',
							property: 'customer'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The rental amount for this line. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'received',
							description: 'The quantity of this line item that was received.',
							type: 'decimal',
							source: 'object',
							property: 'received'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'Bin from which this item was shipped.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'lotExpiration',
							description: 'Unused.',
							type: 'timestamp',
							source: 'object',
							property: 'lotExpiration'
						},
						{
							name: 'serials',
							description: 'Unused.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rmas',
		sosObject: 'RMA',
		description: 'An RMA (Return Merchandise Authorization) is a form issued to a customer that permits the return of one or more items.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/rma',
				description: 'Returns a list of rma objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Rma',
		sosHelpUrl: 'https://help.sosinventory.com/v8-return-merchandise-authorizations-and-the-rmas-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of an RMA, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'string'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'linkedReturns',
				description: '',
				type: 'array'
			},
			{
				name: 'returnStatus',
				description: '',
				type: 'string'
			},
			{
				name: 'expiration',
				description: 'Date this RMA expires.',
				type: 'timestamp'
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for this RMA.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'The carrier\'s tracking number for this RMA.',
				type: 'string'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for this RMA.',
				type: 'array',
				sidecar: {
					table: 'rmaItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this RMA line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on this RMA transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The per-unit purchase cost for the item.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The rental amount for this line. The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'the number of items invoiced on this line.',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line item.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line item.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'Unused.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'Bin from which this item was shipped.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'Unused.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesOrders',
		sosObject: 'Sales Order',
		description: 'A sales order is an order from a customer to buy products or services at a specified price. Sales orders are non-posting transactions, meaning that they do not impact your financials until they are converted into shipments and/or invoices.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/salesorder',
				description: 'Returns a list of sales order objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'channel',
						description: 'Filters transactions according to the name of the channel.',
						type: 'string'
					},
					{
						name: 'orderStage',
						description: 'Filters transactions according to the name of the order stage.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/SalesOrder',
		sosHelpUrl: 'https://help.sosinventory.com/v8-sales-orders-and-the-sales-orders-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a sales order, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction is assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'orderStage',
				description: 'The order stage of this transaction.',
				type: 'reference',
				reference: { field: 'orderStageId', property: 'id', sourceTable: 'orderStages', sourceField: 'id' }
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction, if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this sales order. Must be an estimate transaction.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'linkedInvoices',
				description: '',
				type: 'array'
			},
			{
				name: 'linkedShipments',
				description: '',
				type: 'array'
			},
			{
				name: 'linkedPickTickets',
				description: '',
				type: 'array'
			},
			{
				name: 'linkedPayments',
				description: '',
				type: 'array'
			},
			{
				name: 'transactionLocationQuickBooks',
				description: '',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'statusMessage',
				description: 'Status message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'customerPO',
				description: 'Customer purchase order field.',
				type: 'string'
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountPercent',
				description: 'Discount percentage field.',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				description: 'Tax percentage field.',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				description: 'Tax amount field.',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountTaxable',
				description: 'True if discount is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'True if shipping is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'dropShip',
				description: 'True if order is to be drop shipped, false if not.',
				type: 'boolean'
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'storeCustomerToken',
				description: '',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'forceSave',
				description: '',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'earliestDueDate',
				description: '',
				type: 'timestamp'
			},
			{
				name: 'accountToken',
				description: '',
				type: 'string'
			},
			{
				name: 'statusLink',
				description: 'Link to OrderFacts page for this transaction, if enabled.',
				type: 'string'
			},
			{
				name: 'lines',
				description: 'The lines for the sales order.',
				type: 'array',
				sidecar: {
					table: 'salesOrderItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this sales line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the sales order transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the item\'s volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'The number of items invoiced on this line.',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'The due date for this line.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesReceipts',
		sosObject: 'Sales Receipt',
		description: 'A sales receipt is a record of a completed sales transaction.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/salesreceipt',
				description: 'Returns a list of sales receipt objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, or customer name.',
						type: 'string'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the estimate will be returned.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'channel',
						description: 'Filters transactions according to the name of the channel.',
						type: 'string'
					},
					{
						name: 'orderStage',
						description: 'Filters transactions according to the name of the order stage.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/SalesReceipt',
		sosHelpUrl: 'https://help.sosinventory.com/v8-sales-receipts-and-the-sales-receipts-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a sales receipt, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customer', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'paymentMethod',
				description: 'Payment method for this transaction.',
				type: 'reference',
				reference: { field: 'paymentMethodId', property: 'id', sourceTable: 'paymentMethoids', sourceField: 'id' }
			},
			{
				name: 'depositAccount',
				description: 'Account to which funds were deposited for this transaction.',
				type: 'reference',
				reference: { field: 'depositAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'salesRep',
				description: 'Sales representative for this transaction.',
				type: 'reference',
				reference: { field: 'salesRepId', property: 'id', sourceTable: 'salesReps', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction is assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'orderStage',
				description: 'The order stage of this transaction.',
				type: 'reference',
				reference: { field: 'orderStageId', property: 'id', sourceTable: 'orderStages', sourceField: 'id' }
			},
			{
				name: 'taxCode',
				description: 'Tax code for transaction.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'currency',
				description: 'Currency used for transaction, if multicurrency is enabled.',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'The transaction linked to this sales receipt. Must be an estimate transaction.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'exchangeRate',
				description: 'The exchange rate used for this transaction, if multicurrency is enabled.',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'statusMessage',
				description: 'Status message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'This comment is not visible to the customer on SOS-generated PDFs and emails, but the comment does appear on customer statements generated in QuickBooks.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'customerPO',
				description: 'Customer purchase order field.',
				type: 'string'
			},
			{
				name: 'depositAmount',
				description: 'Deposit amount field.',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				description: 'Subtotal for transaction.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountPercent',
				description: 'Discount percentage field.',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				description: 'Discount amount field.',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				description: 'Tax percentage field.',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				description: 'Tax amount field.',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Transaction total.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'discountTaxable',
				description: 'True if discount is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'shippingTaxable',
				description: 'True if shipping is taxable, false if not.',
				type: 'boolean'
			},
			{
				name: 'dropShip',
				description: 'True if order is to be drop shipped, false if not.',
				type: 'boolean'
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'statusLink',
				description: 'Link to OrderFacts page for this transaction, if enabled.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this sales receipt, if syncronizing with Quickbooks.',
				type: 'timestamp',
				readOnly: true
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for the sales receipt.',
				type: 'array',
				sidecar: {
					table: 'salesReceiptItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this sales line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on the sales receipt transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the item\'s volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'The amount must equal the quantity multiplied by the unit price.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'The number of items picked on this line.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'The number of items shipped on this line.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'The number of items invoiced on this line.',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'The cost for this line.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'The margin for this line.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'The list price for this item.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'The discount percentage applied to this line.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'dueDate',
							description: 'The due date for this line.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesReps',
		sosObject: 'Sales rep',
		description: 'The configured sales reps for this account.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/salesrep',
				description: 'Returns a list of salesrep objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#salesrep',
		sosHelpUrl: 'https://help.sosinventory.com/v8-sales-reps',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'lastName',
				description: 'The sales rep\'s last name.',
				type: 'string'
			},
			{
				name: 'firstName',
				description: 'The sales rep\'s first name.',
				type: 'string'
			},
			{
				name: 'commissionRate',
				description: 'Percentage commission rate applied to sales for this rep.',
				type: 'decimal'
			},
			{
				name: 'commissionAmount',
				description: 'Flat commission amount applied per sale for this rep.',
				type: 'decimal'
			},
			{
				name: 'user',
				description: 'The associated SOS user account for this sales rep.',
				type: 'reference',
				reference: { field: 'userId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'restrictCustomers',
				description: 'Indicates whether this sales rep is restricted to specific customers.',
				type: 'boolean'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'serialNumbers',
		sosObject: 'Serial Number',
		description: 'Serialized inventory allows you to track individual units of an item, rather than quantities only. A serial number is assigned to each unit, and the number stays with the unit as it goes through the system.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/serial',
				description: 'Returns a list of serial objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, description, or item name.',
						type: 'string'
					},
					{
						name: 'location',
						description: 'The name of a location to filter the items.',
						type: 'string'
					},
					{
						name: 'itemId',
						description: 'The id of the item to filter the items.',
						type: 'integer'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/SerialNumber',
		sosHelpUrl: 'https://help.sosinventory.com/v8-serial-inventory',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The serial identification number.',
				type: 'string'
			},
			{
				name: 'item',
				description: 'The item associated with this serial number.',
				type: 'reference',
				reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'The location for this serial number.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'customer',
				description: 'The customer associated with this serial number.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'warranty',
				description: 'Self-explanatory.',
				type: 'reference',
				reference: { field: 'warrantyId', property: 'id', sourceTable: 'warranties', sourceField: 'id' }
			},
			{
				name: 'description',
				description: 'Default description for this serial number.',
				type: 'string'
			},
			{
				name: 'status',
				description: 'The status of this serial number: "In Stock", "Used", "Shipped", or "Adjusted Out".',
				type: 'string'
			},
			{
				name: 'cost',
				description: 'Cost of this serialized item.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'net',
				description: 'Net cost of this serialized item.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'hasImage',
				description: 'True if a product image is available for this serialized item. False, if not.',
				type: 'boolean'
			},
			{
				name: 'summaryOnly',
				description: '',
				type: 'boolean'
			},
			{
				name: 'imageAsBase64String',
				description: 'Binary image of this item, encoded as a Base64 string.',
				type: 'string'
			},
			{
				name: 'imageChanged',
				description: 'True if a new item image is being sent with this create or update transaction. False, if not.',
				type: 'boolean'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'shipments',
		sosObject: 'Shipment',
		description: 'In SOS Inventory, a shipment moves inventory from your company to the customer. The process does not necessarily mean that you actually shipped it. If, for example, a customer picks up the items from your location, a shipment transaction is still needed to indicate the items were removed from inventory.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/shipment',
				description: 'Returns a list of shipment objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the shipment will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, comment, customerPO, trackingNumber, customer name or location name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'location',
						description: 'Filters transactions according to the name of the location.',
						type: 'string'
					},
					{
						name: 'customerId',
						description: 'Filters transactions according to the customer id of the customer.',
						type: 'integer'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Shipment',
		sosHelpUrl: 'https://help.sosinventory.com/v8-shipments-and-shipments-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a shipment, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'billing',
				description: 'Billing address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'shipping',
				description: 'Shipping address.',
				type: 'object',
				objectType: sosObjects.transactionAddress
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction is assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method used for this transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: '',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				description: 'Unused.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'customerMessage',
				description: 'Customer message field.',
				type: 'string'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'customerPO',
				description: 'Customer purchase order field.',
				type: 'string'
			},
			{
				name: 'shipBy',
				description: 'Date by which this order should be shipped.',
				type: 'timestamp'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'forceToShipStation',
				description: 'A true response sends the transaction to ShipStation (shipping software) the next time it retrieves data from SOS, even if ShipStation does not request it.',
				type: 'boolean'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'trackingLink',
				description: 'Link to a shipment tracking page for this transaction, if available.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for this shipment.',
				type: 'array',
				sidecar: {
					table: 'shipmentItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this shipment line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on this shipment transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'The tax information for this line, if enabled.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: 'The transaction linked to this line.',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity for this line.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the item\'s volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'The number of items invoiced on this line.',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'backOrdered',
							description: '',
							type: 'decimal',
							source: 'object',
							property: 'backOrdered'
						},
						{
							name: 'dueDate',
							description: 'Unused.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'shipMethods',
		sosObject: 'Ship method',
		description: 'The configured shipment methods for this account.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/shipmethod',
				description: 'Returns a list of shipmethod objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#shipmethod',
		sosHelpUrl: 'https://help.sosinventory.com/v8-shipping-methods',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The ship method name.',
				type: 'string'
			},
			{
				name: 'carrierCode',
				description: 'Carrier identifier used by SOS or third‑party shipping integrations. Often null unless a carrier integration is configured.',
				type: 'string'
			},
			{
				name: 'shipStationCarrier',
				description: 'Carrier name used when syncing with ShipStation. Null if ShipStation integration is not enabled.',
				type: 'string'
			},
			{
				name: 'shipStationService',
				description: 'Service level used by ShipStation (e.g., Ground, 2‑Day). Null if ShipStation integration is not enabled.',
				type: 'string'
			},
			{
				name: 'vendor',
				description: 'Optional vendor record associated with this ship method. When present, this is a JSON object representing a Vendor, not a reference ID. Null if no vendor is linked.',
				type: 'reference',
				reference: { field: 'vendorId', property: 'id', sourceTable: 'vendors', sourceField: 'id' }
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'taxCodes',
		sosObject: 'Tax code',
		description: 'This represents the details of a tax code.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/taxcode',
				description: 'Returns a list of taxcode objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#taxcode',
		sosHelpUrl: 'https://help.sosinventory.com/v8-discounts-deposits-and-taxes',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The tax code name.',
				type: 'string'
			},
			{
				name: 'salesTaxRate',
				description: 'The tax rate used on sales transactions.',
				type: 'decimal'
			},
			{
				name: 'purchaseTaxRate',
				description: 'The tax rate used on purchase transactions.',
				type: 'decimal'
			},
			{
				name: 'isSalesTaxType',
				description: 'True if tax code is applicable to sales transactions, false if not.',
				type: 'boolean'
			},
			{
				name: 'isPurchaseTaxType',
				description: 'True if tax code is applicable to purchasing transactions, false if not.',
				type: 'boolean'
			},
			{
				name: 'taxRates',
				description: 'List of tax rate components associated with this tax code, as provided by QuickBooks. Each entry includes an id, name, and rate.',
				type: 'array'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'terms',
		sosObject: 'Terms',
		description: 'The configured payment terms for this account.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/terms',
				description: 'Returns a list of terms objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#terms',
		sosHelpUrl: 'https://help.sosinventory.com/v8-payment-methods-and-terms',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The term name',
				type: 'string'
			},
			{
				name: 'syncMessage',
				description: 'Message returned by the most recent QuickBooks sync for this term. Typically empty unless a sync warning or error occurred.',
				type: 'string'
			},
			{
				name: 'dueDays',
				description: 'Number of days after the transaction date when payment is due.',
				type: 'integer'
			},
			{
				name: 'discountDays',
				description: 'Number of days within which an early‑payment discount applies.',
				type: 'integer'
			},
			{
				name: 'discountPercent',
				description: 'Percentage discount applied if payment is made within the discount period.',
				type: 'decimal'
			},
			{
				name: 'dayOfMonthDue',
				description: 'Day of the month on which payment is due, for date‑based terms.',
				type: 'integer'
			},
			{
				name: 'discountDayOfMonth',
				description: 'Day of the month by which payment must be made to receive a discount.',
				type: 'integer'
			},
			{
				name: 'dateDiscountPercent',
				description: 'Percentage discount applied when using date‑based discount terms.',
				type: 'decimal'
			},
			{
				name: 'dueNextMonthDays',
				description: 'Number of days into the next month when payment is due, for extended terms.',
				type: 'integer'
			},
			{
				name: 'lastSync',
				description: 'Timestamp of the last successful QuickBooks sync for this term.',
				type: 'timestamp'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'transfers',
		sosObject: 'Transfer',
		description: 'Transfer transactions record the movement of inventory from one location to another.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/transfer',
				description: 'Returns a list of transfer objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the shipment will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, id, comment, from location name, or to location name.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'fromLocation',
						description: 'Filters transfer records according to the name of the originating location.',
						type: 'string'
					},
					{
						name: 'toLocation',
						description: 'Filters transfer records according to the name of the destination location.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Transfer',
		sosHelpUrl: 'https://help.sosinventory.com/v8-transfers',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of a shipment, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'fromLocation',
				description: 'Location from which inventory is being transferred.',
				type: 'reference',
				reference: { field: 'fromLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'toLocation',
				description: 'Location to which inventory is being transferred.',
				type: 'reference',
				reference: { field: 'toLocationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'shippingMethod',
				description: 'Shipping method for this transaction.',
				type: 'reference',
				reference: { field: 'shipMethodId', property: 'id', sourceTable: 'shipMethods', sourceField: 'id' }
			},
			{
				name: 'trackingNumber',
				description: 'Carrier\'s tracking number.',
				type: 'string'
			},
			{
				name: 'shippingAmount',
				description: 'Shipping amount field.',
				type: 'decimal'
			},
			{
				name: 'createBillForShippingAmount',
				description: 'If true, the system will create a bill from the vendor associated with the shipping method. Valid only on create and update.',
				type: 'boolean'
			},
			{
				name: 'comment',
				description: 'Transaction comment.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'archived',
				description: 'Is the transaction archived?',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for this transfer.',
				type: 'array',
				sidecar: {
					table: 'transferItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this transfer item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line on this transaction.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the item\'s volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'lot',
							description: 'Lot to which this item belongs.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'fromBin',
							description: 'Bin from which inventory is being transferred.',
							type: 'reference',
							reference: { field: 'fromBinId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'fromBin'
						},
						{
							name: 'toBin',
							description: 'Bin to which inventory is being transferred.',
							type: 'reference',
							reference: { field: 'toBinId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'toBin'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'quantity',
							description: 'The quantity of this line item.',
							type: 'decimal',
							source: 'object',
							property: 'quantity'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'unitsOfMeasure',
		sosObject: 'Unit of measure',
		description: 'The configured units of measure for this account. Available on Plus and Pro plans.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/uom',
				description: 'Returns a list of uom objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#uom',
		sosHelpUrl: 'https://help.sosinventory.com/v8-units-of-measure-uoms',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The unit of measure name.',
				type: 'string'
			},
			{
				name: 'abbreviation',
				description: 'The abbreviation used for this unit of measure.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'users',
		sosObject: 'User',
		description: 'The users that are configured for this account.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/user',
				description: 'Returns a list of user objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#user',
		sosHelpUrl: 'https://help.sosinventory.com/v8-user-administration',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The user\'s name',
				type: 'string'
			},
			{
				name: 'email',
				description: 'The user\'s email address',
				type: 'string'
			},
			{
				name: 'lastLogin',
				description: 'Timestamp of the user’s most recent successful login.',
				type: 'timestamp'
			},
			{
				name: 'active',
				description: 'Indicates whether the user account is enabled.',
				type: 'boolean'
			},
			{
				name: 'admin',
				description: 'Indicates whether the user is an SOS company administrator.',
				type: 'boolean'
			},
			{
				name: 'master',
				description: 'Indicates whether this is the master administrator account. This cannot be changed.',
				type: 'boolean'
			},
			{
				name: 'locked',
				description: 'Indicates whether the user account is locked due to failed logins or administrative action.',
				type: 'boolean'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'vendors',
		sosObject: 'Vendor',
		description: '',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/vendor',
				description: 'Returns a list of vendor objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the shipment will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: name or notes.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Vendor',
		sosHelpUrl: 'https://help.sosinventory.com/v8-vendors-and-the-vendors-list',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided when creating a customer.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this vendor has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be 1 color of star or 3 colors of star. See company setting in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The name by which you look up this vendor.',
				type: 'string'
			},
			{
				name: 'email',
				description: 'Vendor email address.',
				type: 'string'
			},
			{
				name: 'website',
				description: 'Include the entire address, like "http://www.acompany.com".',
				type: 'string'
			},
			{
				name: 'phone',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'mobile',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'altPhone',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'fax',
				description: 'Self-explanatory. No format is enforced.',
				type: 'string'
			},
			{
				name: 'companyName',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'contact',
				description: 'The person to contact regarding this vendor.',
				type: 'object',
				objectType: sosObjects.contact
			},
			{
				name: 'address',
				description: 'The vendor\'s billing address.',
				type: 'object',
				objectType: sosObjects.address
			},
			{
				name: 'terms',
				description: 'Payment terms.',
				type: 'reference',
				reference: { field: 'termsId', property: 'id', sourceTable: 'terms', sourceField: 'id' }
			},
			{
				name: 'accountNumber',
				description: 'Self-explanatory.',
				type: 'string'
			},
			{
				name: 'currency',
				description: 'Currency used for vendor, if multicurrency is enabled.',
				type: 'reference'
			},
			{
				name: 'taxCode',
				description: 'Tax type for this vendor.',
				type: 'reference',
				reference: { field: 'taxCodeId', property: 'id', sourceTable: 'taxCodes', sourceField: 'id' }
			},
			{
				name: 'showOnForms',
				description: 'True if vendor appears in dropdown lists on purchasing forms. False, if not.',
				type: 'boolean'
			},
			{
				name: 'notes',
				description: 'The company’s internal notes about this vendor. These notes are not visible to the vendor.”',
				type: 'string'
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'Indicates if the summary parameter was set when retrieving back this record',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'syncMessage',
				description: 'The sync error message if the last sync attempt failed with Quickbooks. This will be empty if synchronization is successful.',
				type: 'string'
			},
			{
				name: 'lastSync',
				description: 'The last successful sync time (GMT) for this vendor, if syncronizing with Quickbooks.',
				type: 'timestamp'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'altAddresses',
				description: 'See the address field for address format.',
				type: 'array'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'warranties',
		sosObject: 'Warranty',
		description: 'The configured warranty settings for this account. Supported on Plus and Pro plans.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/warranty',
				description: 'Returns a list of warranty objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#warranty',
		sosHelpUrl: 'https://help.sosinventory.com/v8-warranties',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The warranty name.',
				type: 'string'
			},
			{
				name: 'description',
				description: 'Free‑text description of the warranty. Inferred from UI; not yet confirmed in API.',
				type: 'string'
			},
			{
				name: 'duration',
				description: 'Length of the warranty period. Inferred from UI; not yet confirmed in API.',
				type: 'integer'
			},
			{
				name: 'durationUnits',
				description: 'Units for the warranty duration (Days, Weeks, Months, Years). Inferred from UI; not yet confirmed in API.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'workCenters',
		sosObject: 'Work center',
		description: 'The configured work centers for this account. Available on Pro Plan only.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/workcenter',
				description: 'Returns a list of workcenter objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#workcenter',
		sosHelpUrl: 'https://help.sosinventory.com/v8-work-centers',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'name',
				description: 'The work center name.',
				type: 'string'
			},
			{
				name: 'sortOrder',
				description: 'Controls the display order of work centers.',
				type: 'integer'
			},
			{
				name: 'assetAccount',
				description: 'The asset account associated with this work center.',
				type: 'reference',
				reference: { field: 'assetAccountId', property: 'id', sourceTable: 'accounts', sourceField: 'id' }
			},
			{
				name: 'accountNumber',
				description: 'The account number of the associated asset account.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'workers',
		sosObject: 'Worker',
		description: 'The configured workers for this account. Available on Pro Plan only.',
		reference: true,
		api: {
			query: {
				endpoint: '/api/v2/worker',
				description: 'Returns a list of worker objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/references#worker',
		sosHelpUrl: 'https://help.sosinventory.com/v8-workers-and-labor',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record.',
				type: 'integer'
			},
			{
				name: 'lastName',
				description: 'The worker\'s last name.',
				type: 'string'
			},
			{
				name: 'firstName',
				description: 'The worker\'s first name.',
				type: 'string'
			},
			{
				name: 'employee',
				description: 'The associated QuickBooks employee record, if applicable. Inferred from UI; pending API confirmation.',
				type: 'reference',
				reference: { field: 'employeeId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'workOrders',
		sosObject: 'Work Order',
		description: 'A work order is a directive to produce a specified number of items. SOS Inventory allows you to provide detailed instructions on the work order about how to make each item. Work orders are non-posting transactions. They do not affect your inventory until the manufacturing is recorded using a build or process transaction.',
		primary: true,
		api: {
			query: {
				endpoint: '/api/v2/workorder',
				description: 'Returns a list of work order objects.',
				method: 'GET',
				results: [
					{
						name: 'count',
						description: 'The number of results returned in this query.',
						type: 'integer'
					},
					{
						name: 'totalCount',
						description: 'The total number of records that match the filters of this query.',
						type: 'integer'
					},
					{
						name: 'data',
						description: 'An array of invoice objects.',
						type: 'array'
					},
					{
						name: 'status',
						description: 'The status of the query. Will be “ok” if successful, otherwise this matches with the message field to indicate why the call failed.',
						type: 'string'
					},
					{
						name: 'message',
						description: 'A descriptive message indicating why the query was unsuccessful.',
						type: 'string'
					}
				],
				arguments: [
					{
						name: 'start',
						description: 'A cursor used in pagination. This is the row number of the full set of results. The API limits results to a max of 200 results per call. If you want to retrieve the next set of results you can use this parameter to retrive the next set of results. For example if you are retrieving 200 results at a time, you can set start=201 to retrieve the next page of results.',
						type: 'integer'
					},
					{
						name: 'maxresults',
						description: 'The maximum number of results you want to return. The default is 200, the maximum value allowed.',
						type: 'integer'
					},
					{
						name: 'summary',
						description: 'If this parameter is present (the value doesn\'t matter, and doesn\'t need to be specified), only the summary attributes of the shipment will be returned.',
						type: 'string'
					},
					{
						name: 'query',
						description: 'This parameter will filter the results by matches of the string on the following fields: number, customer name, or comments.',
						type: 'string'
					},
					{
						name: 'status',
						description: 'Filters results by whether the transaction is open or closed.',
						type: 'string'
					},
					{
						name: 'archived',
						description: 'A "yes" returns archived records only; a "no" returns only those that have not been archived.',
						type: 'string'
					},
					{
						name: 'from/to',
						description: 'Returns records based on the beginning and ending transaction dates specified. Both parameters are optional. Using only one parameter allows filtering in one direction. Example: from=2019-09-01T00:00:00&to=2019-09-10T00:00:00',
						type: 'timestamp'
					},
					{
						name: 'createdsince/updatedsince',
						description: 'Filters transactions created or updated since a specified date/time.',
						type: 'timestamp'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/WorkOrder',
		sosHelpUrl: 'https://help.sosinventory.com/v8-work-orders',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. Must not be provided on create transactions.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				description: 'Indicates if this transaction has been starred. A value of 0 = no star; 1 or 1-3 = starred. Star colors depend on application configuration. This could be one color of star or three colors of stars. See Company Settings in the user guide for more details.',
				type: 'integer'
			},
			{
				name: 'syncToken',
				description: 'Indicates the current version of this record. If you receive an error when updating a record, it is because your syncToken is for an older version of the record than that which is currently in the database. Please GET the latest version prior to updating.',
				type: 'integer'
			},
			{
				name: 'number',
				description: 'The order number for this record. If you wish to use the automatic numbering capability on creation of an order, pass the string “auto”.',
				type: 'string'
			},
			{
				name: 'date',
				description: 'Transaction date.',
				type: 'timestamp'
			},
			{
				name: 'customer',
				description: 'Customer for this transaction.',
				type: 'reference',
				reference: { field: 'customerId', property: 'id', sourceTable: 'customers', sourceField: 'id' }
			},
			{
				name: 'location',
				description: 'Location for this transaction.',
				type: 'reference',
				reference: { field: 'locationId', property: 'id', sourceTable: 'locations', sourceField: 'id' }
			},
			{
				name: 'channel',
				description: 'Channel (e.g., Catalog, Retail Store) for this transaction.',
				type: 'reference',
				reference: { field: 'channelId', property: 'id', sourceTable: 'channels', sourceField: 'id' }
			},
			{
				name: 'department',
				description: 'Department for this transaction.',
				type: 'reference',
				reference: { field: 'departmentId', property: 'id', sourceTable: 'departments', sourceField: 'id' }
			},
			{
				name: 'priority',
				description: 'The degree of importance or urgency assigned to this transaction.',
				type: 'reference',
				reference: { field: 'priorityId', property: 'id', sourceTable: 'priorities', sourceField: 'id' }
			},
			{
				name: 'assignedToUser',
				description: 'User to whom this transaction is assigned.',
				type: 'reference',
				reference: { field: 'assignedToUserId', property: 'id', sourceTable: 'users', sourceField: 'id' }
			},
			{
				name: 'linkedTransaction',
				description: 'The order linked to this transaction.',
				type: 'object',
				objectType: sosObjects.transaction
			},
			{
				name: 'linkedOrders',
				description: '',
				type: 'array'
			},
			{
				name: 'comment',
				description: 'The company’s internal comment about this transaction. This comment is not visible to the customer.',
				type: 'string'
			},
			{
				name: 'customerNotes',
				description: 'Field for internal notes about customer.',
				type: 'string'
			},
			{
				name: 'customFields',
				description: 'The list of custom fields for this object type.',
				type: 'array',
				objectType: sosObjects.customField
			},
			{
				name: 'total',
				description: 'Total inputs on this work order.',
				type: 'decimal'
			},
			{
				name: 'closed',
				description: 'True if transaction is closed, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'archived',
				description: 'True if item is archived, false if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'summaryOnly',
				description: 'True if the summary parameter was set when this record was retrieved. False if not.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'hasSignature',
				description: 'Reserved for future use.',
				type: 'boolean',
				readOnly: true
			},
			{
				name: 'lines',
				description: 'The lines for this work order.',
				type: 'array',
				sidecar: {
					table: 'workOrderItems',
					fields: [
						{
							name: 'id',
							description: 'The unique identifier for this line item. ID field is ignored on create requests.',
							type: 'integer',
							source: 'object',
							property: 'id',
							nulls: false,
							unique: true
						},
						{
							name: 'lineNumber',
							description: 'The line number for this line.',
							type: 'integer',
							source: 'object',
							property: 'lineNumber'
						},
						{
							name: 'item',
							description: 'The item this line represents.',
							type: 'reference',
							reference: { field: 'itemId', property: 'id', sourceTable: 'items', sourceField: 'id' },
							source: 'object',
							property: 'item'
						},
						{
							name: 'class',
							description: 'The class for this line.',
							type: 'reference',
							reference: { field: 'classId', property: 'id', sourceTable: 'classes', sourceField: 'id' },
							source: 'object',
							property: 'class'
						},
						{
							name: 'job',
							description: 'The job for this line, if enabled.',
							type: 'reference',
							reference: { field: 'jobId', property: 'id', sourceTable: 'jobs', sourceField: 'id' },
							source: 'object',
							property: 'job'
						},
						{
							name: 'workcenter',
							description: 'The related work center for the job.',
							type: 'reference',
							reference: { field: 'workCenterId', property: 'id', sourceTable: 'workCenters', sourceField: 'id' },
							source: 'object',
							property: 'workcenter'
						},
						{
							name: 'tax',
							description: 'Unused.',
							type: 'object',
							objectTypes: sosObjects.taxInformation,
							source: 'object',
							property: 'tax'
						},
						{
							name: 'linkedTransaction',
							description: '',
							type: 'object',
							objectTypes: sosObjects.transaction,
							source: 'object',
							property: 'linkedTransaction'
						},
						{
							name: 'description',
							description: 'The item description.',
							type: 'string',
							source: 'object',
							property: 'description'
						},
						{
							name: 'weight',
							description: 'The weight of this line.',
							type: 'decimal',
							source: 'object',
							property: 'weight',
							readOnly: true
						},
						{
							name: 'volume',
							description: 'The volume of this line.',
							type: 'decimal',
							source: 'object',
							property: 'volume',
							readOnly: true
						},
						{
							name: 'weightunit',
							description: 'The unit for the item\'s weight value.',
							type: 'string',
							source: 'object',
							property: 'weightunit',
							readOnly: true
						},
						{
							name: 'volumeunit',
							description: 'The unit for the item\'s volume value.',
							type: 'string',
							source: 'object',
							property: 'volumeunit',
							readOnly: true
						},
						{
							name: 'unitPrice',
							description: 'The unit price for this item. Must be above the item’s minimum price, if set.',
							type: 'decimal',
							source: 'object',
							property: 'unitPrice'
						},
						{
							name: 'amount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'amount'
						},
						{
							name: 'altAmount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'altAmount'
						},
						{
							name: 'picked',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'picked'
						},
						{
							name: 'shipped',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'shipped'
						},
						{
							name: 'invoiced',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'invoiced'
						},
						{
							name: 'produced',
							description: 'The number of items produced.',
							type: 'decimal',
							source: 'object',
							property: 'produced'
						},
						{
							name: 'returned',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'returned'
						},
						{
							name: 'cost',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'cost'
						},
						{
							name: 'margin',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'margin'
						},
						{
							name: 'listPrice',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'listPrice'
						},
						{
							name: 'percentDiscount',
							description: 'Unused.',
							type: 'decimal',
							source: 'object',
							property: 'percentDiscount'
						},
						{
							name: 'backOrdered',
							description: '',
							type: 'decimal',
							source: 'object',
							property: 'backOrdered'
						},
						{
							name: 'dueDate',
							description: 'Unused.',
							type: 'timestamp',
							source: 'object',
							property: 'dueDate'
						},
						{
							name: 'uom',
							description: 'The unit of measure for this line.',
							type: 'reference',
							reference: { field: 'unitsOfMeasureId', property: 'id', sourceTable: 'unitsOfMeasure', sourceField: 'id' },
							source: 'object',
							property: 'uom'
						},
						{
							name: 'bin',
							description: 'The bin used for this item process.',
							type: 'reference',
							reference: { field: 'binId', property: 'id', sourceTable: 'bins', sourceField: 'id' },
							source: 'object',
							property: 'bin'
						},
						{
							name: 'lot',
							description: 'The lot used for this item process.',
							type: 'reference',
							reference: { field: 'lotId', property: 'id', sourceTable: 'lots', sourceField: 'id' },
							source: 'object',
							property: 'lot'
						},
						{
							name: 'serials',
							description: 'The serial numbers used for this item process.',
							type: 'array',
							source: 'object',
							property: 'serials'
						}
					],
					primaryKey: ['id']
				}
			}
		],
		primaryKey: ['id']
	}
]

/** @type {SOSTable[]} */
exports.supportTables = [
	{
		name: 'categories',
		sosObject: null,
		description: 'A derived table representing item categories extracted from the Items table. SOS Inventory does not provide a categories API; categories must be reconstructed from item.category JSON.',
		api: null,
		sourceField: 'category',
		sourceTables: ['items'],
		destinationField: 'categoryId',
		sosApiUrl: null,
		sosHelpUrl: 'https://help.sosinventory.com/v8-creating-and-using-categories',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'name',
				description: 'The category name.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'currencies',
		sosObject: null,
		description: 'A derived table representing currencies extracted from various tables. SOS Inventory does not provide a currencies API; currencies must be reconstructed from various table currency property JSON.',
		api: null,
		sourceField: 'currency',
		sourceTables: ['customers', 'estimates', 'invoices', 'itemReceipts', 'purchaseOrders', 'rentals', 'returns', 'salesOrders', 'salesReceipts', 'vendors'],
		destinationField: 'currencyId',
		sosApiUrl: null,
		sosHelpUrl: 'https://help.sosinventory.com/v8-multicurrency',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'name',
				description: 'The currency name.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'itemBoms',
		sosObject: 'BOM',
		description: 'A derived support table representing Bill of Materials (BOM) lines for items. BOMs are retrieved per item using the item/:id/bom endpoint.',
		support: true,
		api: {
			query: {
				endpoint: '/api/v2/item/:id/bom',
				description: 'This returns an array of the Bill of Material for an item, if the item is an assembly or kit.',
				method: 'GET',
				results: [
					{
						name: 'item',
						description: 'The item this BOM data represents.',
						type: 'reference'
					},
					{
						name: 'lines',
						description: 'The lines for this BOM.',
						type: 'integer'
					}
				],
				arguments: [
					{
						name: 'id',
						description: 'The id of the item.',
						type: 'integer'
					}
				]
			}
		},
		sosApiUrl: 'https://developer.sosinventory.com/apidoc/Item',
		sosHelpUrl: 'https://help.sosinventory.com/v8-bulk-editing-boms-bills-of-materials',
		fields: [
			{
				name: 'id',
				description: 'Unique identifier for this record. ID field is ignored on create requests.',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'itemId',
				description: 'The parent item ID for this BOM. Added by the ingestion engine because SOS does not include it in the BOM payload.',
				type: 'integer'
			},
			{
				name: 'lineNumber',
				description: 'The line number for this line on the BOM.',
				type: 'integer'
			},
			{
				name: 'componentItem',
				description: 'A reference to the item for this line on the BOM.',
				type: 'reference',
				reference: { field: 'componentItemId', property: 'id', sourceTable: 'items', sourceField: 'id' }
			},
			{
				name: 'description',
				description: 'The item description.',
				type: 'string'
			},
			{
				name: 'quantity',
				description: 'The quantity of this item on the BOM.',
				type: 'integer'
			},
			{
				name: 'cost',
				description: 'The cost for this component item.',
				type: 'decimal'
			},
			{
				name: 'total',
				description: 'The component item total.',
				type: 'decimal'
			},
			{
				name: 'typeOfItem',
				description: 'The kind of item. Must be one of the following: "Inventory Item", "Non-inventory", "Category", "Expense", "Assembly", "Kit", "Service", "Labor", "Overhead", or "Other".',
				type: 'string'
			},
			{
				name: 'baseWeight',
				description: 'The base weight for this item',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'weight',
				description: 'The weight of this item.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'weightunit',
				description: 'The unit for the weight value.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'baseVolume',
				description: 'The base volume for this item',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'volume',
				description: 'The volume of this item.',
				type: 'decimal',
				readOnly: true
			},
			{
				name: 'volumeunit',
				description: 'The unit for the volume value.',
				type: 'string',
				readOnly: true
			},
			{
				name: 'notes',
				description: 'The note for this line on the BOM.',
				type: 'string'
			}
		],
		primaryKey: ['id']
	}
]
