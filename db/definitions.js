/**
 * @typedef {Object} SOSAddress
 * @property {string} line1
 * @property {string} line2
 * @property {string} city
 * @property {string} postalCode
 * @property {string} country
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
 * @typedef {Object} SOSTable
 * @property {String} name - name of the table
 * @property {String} description - description of the table
 * @property {Boolean} [primary] - whether the table should be grouped as part of SOS Inventory's Primary objects
 * @property {Boolean} [reference] - whether the table should be grouped as part of SOS Inventory's Reference objects
 * @property {Boolean} [support] - whether the table should be grouped as part of SOS Inventory's Support objects
 * @property {String} [api] - SOS Inventory API endpoint
 * @property {Boolean} [supportsFromTo] - whether the API supports from and to parameters
 * @property {Boolean} [supportsCreatedSinceUpdatedSince] - whether the API supports createdsince and updatedsince parameters
 * @property {String} [sosObject] - name of the SOS Inventory API object
 * @property {String} [sosApiUrl] - link to SOS Inventory API developer page
 * @property {String} [sosHelpUrl] - link to SOS Inventory help page
 * @property {SOSField[]} fields - field definitions for the table
 * @property {String[]} primaryKey - array of field names to make up the table's primary key
 */
/** @type {SOSTable[]} */
exports.tables = [
	{
		name: 'accounts',
		description: 'This represents an account used for posting to an accounting system.',
		reference: true,
		api: 'account',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Account',
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
		description: 'Inventory adjustments allow you to modify the quantity and/or cost basis of inventory on hand. You should use inventory adjustments sparingly, as most often inventory will be added or removed through item receipts and shipments.',
		primary: true,
		api: 'adjustment',
		supportsFromTo: true,
		supportsCreatedSinceUpdatedSince: true,
		sosObject: 'Adjustment',
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
				type: 'array'
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
							property: 'id'
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
		description: 'Bins provide a way of managing the place for each item within a given location. Bins are available on Plus plans and Pro plans.',
		reference: true,
		api: 'bins',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Bins',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'job',
				type: 'string'
			},
			{
				name: 'workcenter',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'linkedWorkOrder',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'outputs',
				type: 'string'
			},
			{
				name: 'inputs',
				type: 'string'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'jobId',
				type: 'integer'
			},
			{
				name: 'workCenterId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'categories',
		description: 'A derived table representing item categories extracted from the Items table. SOS Inventory does not provide a categories API; categories must be reconstructed from item.category JSON.',
		support: true,
		api: null,
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: null,
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
		name: 'channels',
		description: 'The sales channels configured for this account.',
		reference: true,
		api: 'channel',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Channel',
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
		description: 'This represents the class used for class tracking.',
		reference: true,
		api: 'class',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Class',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'fullname',
				type: 'string'
			},
			{
				name: 'parent',
				type: 'string'
			},
			{
				name: 'sublevel',
				type: 'integer'
			},
			{
				name: 'email',
				type: 'string'
			},
			{
				name: 'website',
				type: 'string'
			},
			{
				name: 'phone',
				type: 'string'
			},
			{
				name: 'mobile',
				type: 'string'
			},
			{
				name: 'altPhone',
				type: 'string'
			},
			{
				name: 'fax',
				type: 'string'
			},
			{
				name: 'companyName',
				type: 'string'
			},
			{
				name: 'portalPassword',
				type: 'string'
			},
			{
				name: 'contact',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'priceTier',
				type: 'string'
			},
			{
				name: 'paymentMethod',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'customerType',
				type: 'string'
			},
			{
				name: 'resaleNumber',
				type: 'string'
			},
			{
				name: 'contractorNumber',
				type: 'string'
			},
			{
				name: 'businessLicense',
				type: 'string'
			},
			{
				name: 'foundUsVia',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'tax',
				type: 'string'
			},
			{
				name: 'creditHold',
				type: 'integer'
			},
			{
				name: 'billWithParent',
				type: 'integer'
			},
			{
				name: 'notes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'altAddresses',
				type: 'string'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'hasChildren',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'isInQuickBooks',
				type: 'integer'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'hasCardOnFile',
				type: 'integer'
			},
			{
				name: 'lastFour',
				type: 'string'
			},
			{
				name: 'expMonth',
				type: 'string'
			},
			{
				name: 'expYear',
				type: 'string'
			},
			{
				name: 'tokenType',
				type: 'string'
			},
			{
				name: 'parentId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'priceTierId',
				type: 'integer'
			},
			{
				name: 'paymentMethodId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'customFields',
		description: 'Custom fields allow additional data to be captured for object definitions and transactions.',
		reference: true,
		api: 'customfield',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Custom field',
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
		description: 'This represents the department used for department tracking.',
		reference: true,
		api: 'department',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Department',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'transactionLocationQuickBooks',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'discountPercent',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				type: 'integer'
			},
			{
				name: 'shippingTaxable',
				type: 'integer'
			},
			{
				name: 'status',
				type: 'string'
			},
			{
				name: 'acceptedBy',
				type: 'string'
			},
			{
				name: 'acceptedDate',
				type: 'string'
			},
			{
				name: 'expiration',
				type: 'string'
			},
			{
				name: 'closed',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'forceSave',
				type: 'integer'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'invoices',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'dueDate',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'linkedPayments',
				type: 'string'
			},
			{
				name: 'sosPaymentLink',
				type: 'string'
			},
			{
				name: 'transactionLocationQuickBooks',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'customerPO',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'discountPercent',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'balance',
				type: 'decimal'
			},
			{
				name: 'status',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'shipDate',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				type: 'integer'
			},
			{
				name: 'shippingTaxable',
				type: 'integer'
			},
			{
				name: 'voided',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'forceSave',
				type: 'integer'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			},
			{
				name: 'shipMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'itemReceipts',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'vendor',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'vendorMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				type: 'string'
			},
			{
				name: 'payment',
				type: 'string'
			},
			{
				name: 'vendorInvoiceDate',
				type: 'string'
			},
			{
				name: 'vendorInvoiceDueDate',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'overhead',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'updateDefaultCosts',
				type: 'integer'
			},
			{
				name: 'autoSerialLots',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'vendorId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'items',
		description: 'Items are the most important pieces of data in SOS Inventory. They drive everything else in the system. Items can represent almost anything—they do not have to be things stored in inventory. An item is simply something you want to track in SOS Inventory. Examples include a product you sell, a service you provide, raw materials you use in manufacturing, and your overhead expenses.',
		primary: false,
		api: 'item',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: true,
		sosObject: 'Item',
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
				type: 'array'
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
		name: 'itemBoms',
		description: 'A derived support table representing Bill of Materials (BOM) lines for items. BOMs are retrieved per item using the item/:id/bom endpoint.',
		support: true,
		api: 'item/:id/bom',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'BOM',
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
	},
	{
		name: 'jobs',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'description',
				type: 'string'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'address',
				type: 'string'
			},
			{
				name: 'workcenters',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'locations',
		description: 'The defined locations for the account. The Companion Plan allows only one location.',
		reference: true,
		api: 'location',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Location',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'item',
				type: 'string'
			},
			{
				name: 'description',
				type: 'string'
			},
			{
				name: 'expiration',
				type: 'string'
			},
			{
				name: 'recalled',
				type: 'integer'
			},
			{
				name: 'expired',
				type: 'integer'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'onHand',
				type: 'decimal'
			},
			{
				name: 'available',
				type: 'decimal'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'itemId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'orderStages',
		description: 'The stages through which an order proceeds to completion.',
		reference: true,
		api: 'orderstage',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Order stage',
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
		description: 'Configured payment method types.',
		reference: true,
		api: 'paymentmethod',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Payment method',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'pickBy',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'priceTiers',
		description: 'The configured price tiers. Available on Plus and Pro plans.',
		reference: true,
		api: 'pricetier',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Price tier',
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
		description: 'The configured priority states.',
		reference: true,
		api: 'priority',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Priority',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'startDate',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'job',
				type: 'string'
			},
			{
				name: 'workcenter',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'linkedWorkOrders',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'yield',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'template',
				type: 'string'
			},
			{
				name: 'multiplier',
				type: 'decimal'
			},
			{
				name: 'outputs',
				type: 'string'
			},
			{
				name: 'inputs',
				type: 'string'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'jobId',
				type: 'integer'
			},
			{
				name: 'workCenterId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'purchaseOrders',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'vendor',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'vendorMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				type: 'string'
			},
			{
				name: 'expectedDate',
				type: 'string'
			},
			{
				name: 'expectedShip',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'dropShip',
				type: 'integer'
			},
			{
				name: 'blanketPO',
				type: 'integer'
			},
			{
				name: 'contractManufacturing',
				type: 'integer'
			},
			{
				name: 'confirmed',
				type: 'integer'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'pendingApproval',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'vendorId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			},
			{
				name: 'shipMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rentalReturns',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'fromLocation',
				type: 'string'
			},
			{
				name: 'toLocation',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'fromLocationId',
				type: 'integer'
			},
			{
				name: 'toLocationId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rentals',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'fromLocation',
				type: 'string'
			},
			{
				name: 'toLocation',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'orderStage',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'statusMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'customerPO',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'discountPercent',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				type: 'integer'
			},
			{
				name: 'shippingTaxable',
				type: 'integer'
			},
			{
				name: 'dropShip',
				type: 'integer'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'statusLink',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'fromLocationId',
				type: 'integer'
			},
			{
				name: 'toLocationId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'returns',
		fields: [
			{
				name: 'populateFromObjectType',
				type: 'string'
			},
			{
				name: 'populateFromId',
				type: 'integer'
			},
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'shipBy',
				type: 'string'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'returnsToVendor',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'vendor',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'account',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'vendorNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'vendorId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'accountId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'rmas',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'linkedReturns',
				type: 'string'
			},
			{
				name: 'returnStatus',
				type: 'string'
			},
			{
				name: 'expiration',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'closed',
				type: 'decimal'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesOrders',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'orderStage',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'linkedInvoices',
				type: 'string'
			},
			{
				name: 'linkedShipments',
				type: 'string'
			},
			{
				name: 'linkedPickTickets',
				type: 'string'
			},
			{
				name: 'linkedPayments',
				type: 'string'
			},
			{
				name: 'transactionLocationQuickBooks',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'statusMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'customerPO',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'discountPercent',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				type: 'integer'
			},
			{
				name: 'shippingTaxable',
				type: 'integer'
			},
			{
				name: 'dropShip',
				type: 'integer'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'storeCustomerToken',
				type: 'integer'
			},
			{
				name: 'forceSave',
				type: 'integer'
			},
			{
				name: 'earliestDueDate',
				type: 'string'
			},
			{
				name: 'accountToken',
				type: 'string'
			},
			{
				name: 'statusLink',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesReceipts',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'paymentMethod',
				type: 'string'
			},
			{
				name: 'depositAccount',
				type: 'string'
			},
			{
				name: 'salesRep',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'orderStage',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'transactionLocationQuickBooks',
				type: 'string'
			},
			{
				name: 'exchangeRate',
				type: 'decimal'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'statusMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'customerPO',
				type: 'string'
			},
			{
				name: 'depositAmount',
				type: 'decimal'
			},
			{
				name: 'subTotal',
				type: 'decimal'
			},
			{
				name: 'discountPercent',
				type: 'decimal'
			},
			{
				name: 'discountAmount',
				type: 'decimal'
			},
			{
				name: 'taxPercent',
				type: 'decimal'
			},
			{
				name: 'taxAmount',
				type: 'decimal'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'discountTaxable',
				type: 'integer'
			},
			{
				name: 'shippingTaxable',
				type: 'integer'
			},
			{
				name: 'dropShip',
				type: 'integer'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'statusLink',
				type: 'string'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'paymentMethodId',
				type: 'integer'
			},
			{
				name: 'depositAccountId',
				type: 'integer'
			},
			{
				name: 'salesRepId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'salesReps',
		description: 'The configured sales reps for this account.',
		reference: true,
		api: 'salesrep',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Sales rep',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'item',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'warranty',
				type: 'string'
			},
			{
				name: 'description',
				type: 'string'
			},
			{
				name: 'status',
				type: 'string'
			},
			{
				name: 'cost',
				type: 'decimal'
			},
			{
				name: 'net',
				type: 'decimal'
			},
			{
				name: 'hasImage',
				type: 'integer'
			},
			{
				name: 'imageAsBase64String',
				type: 'string'
			},
			{
				name: 'imageChanged',
				type: 'integer'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'itemId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'customerId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'shipments',
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'billing',
				type: 'string'
			},
			{
				name: 'shipping',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'customerMessage',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'customerPO',
				type: 'string'
			},
			{
				name: 'shipBy',
				type: 'string'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'forceToShipStation',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'trackingLink',
				type: 'string'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			},
			{
				name: 'shippingMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'shipMethods',
		description: 'The configured shipment methods for this account.',
		reference: true,
		api: 'shipmethod',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Ship method',
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
		description: 'This represents the details of a tax code.',
		reference: true,
		api: 'taxcode',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Tax code',
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
		description: 'The configured payment terms for this account.',
		reference: true,
		api: 'terms',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Terms',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'fromLocation',
				type: 'string'
			},
			{
				name: 'toLocation',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'shippingMethod',
				type: 'string'
			},
			{
				name: 'trackingNumber',
				type: 'string'
			},
			{
				name: 'shippingAmount',
				type: 'decimal'
			},
			{
				name: 'createBillForShippingAmount',
				type: 'integer'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'fromLocationId',
				type: 'integer'
			},
			{
				name: 'toLocationId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'shipMethodId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'unitsOfMeasure',
		description: 'The configured units of measure for this account. Available on Plus and Pro plans.',
		reference: true,
		api: 'uom',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Unit of measure',
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
		description: 'The users that are configured for this account.',
		reference: true,
		api: 'user',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'User',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'email',
				type: 'string'
			},
			{
				name: 'website',
				type: 'string'
			},
			{
				name: 'phone',
				type: 'string'
			},
			{
				name: 'mobile',
				type: 'string'
			},
			{
				name: 'altPhone',
				type: 'string'
			},
			{
				name: 'fax',
				type: 'string'
			},
			{
				name: 'companyName',
				type: 'string'
			},
			{
				name: 'contact',
				type: 'string'
			},
			{
				name: 'address',
				type: 'string'
			},
			{
				name: 'terms',
				type: 'string'
			},
			{
				name: 'accountNumber',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			},
			{
				name: 'taxCode',
				type: 'string'
			},
			{
				name: 'showOnForms',
				type: 'integer'
			},
			{
				name: 'notes',
				type: 'string'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'syncMessage',
				type: 'string'
			},
			{
				name: 'lastSync',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'altAddresses',
				type: 'string'
			},
			{
				name: 'termsId',
				type: 'integer'
			},
			{
				name: 'taxCodeId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	},
	{
		name: 'warranties',
		description: 'The configured warranty settings for this account. Supported on Plus and Pro plans.',
		reference: true,
		api: 'warranty',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Warranty',
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
		description: 'The configured work centers for this account. Available on Pro Plan only.',
		reference: true,
		api: 'workcenter',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Work center',
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
		description: 'The configured workers for this account. Available on Pro Plan only.',
		reference: true,
		api: 'worker',
		supportsFromTo: false,
		supportsCreatedSinceUpdatedSince: false,
		sosObject: 'Worker',
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
		fields: [
			{
				name: 'id',
				type: 'integer',
				nulls: false,
				unique: true
			},
			{
				name: 'starred',
				type: 'integer'
			},
			{
				name: 'syncToken',
				type: 'integer'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'string'
			},
			{
				name: 'customer',
				type: 'string'
			},
			{
				name: 'location',
				type: 'string'
			},
			{
				name: 'channel',
				type: 'string'
			},
			{
				name: 'department',
				type: 'string'
			},
			{
				name: 'priority',
				type: 'string'
			},
			{
				name: 'assignedToUser',
				type: 'string'
			},
			{
				name: 'linkedTransaction',
				type: 'string'
			},
			{
				name: 'linkedOrders',
				type: 'string'
			},
			{
				name: 'comment',
				type: 'string'
			},
			{
				name: 'customerNotes',
				type: 'string'
			},
			{
				name: 'customFields',
				type: 'string'
			},
			{
				name: 'total',
				type: 'decimal'
			},
			{
				name: 'closed',
				type: 'integer'
			},
			{
				name: 'archived',
				type: 'integer'
			},
			{
				name: 'summaryOnly',
				type: 'integer'
			},
			{
				name: 'hasSignature',
				type: 'integer'
			},
			{
				name: 'lines',
				type: 'string'
			},
			{
				name: 'customerId',
				type: 'integer'
			},
			{
				name: 'locationId',
				type: 'integer'
			},
			{
				name: 'channelId',
				type: 'integer'
			},
			{
				name: 'departmentId',
				type: 'integer'
			},
			{
				name: 'priorityId',
				type: 'integer'
			},
			{
				name: 'assignedToUserId',
				type: 'integer'
			}
		],
		primaryKey: ['id']
	}
]
