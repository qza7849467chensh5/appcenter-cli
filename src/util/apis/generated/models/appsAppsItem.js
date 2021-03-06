/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AppsAppsItem.
 */
class AppsAppsItem {
  /**
   * Create a AppsAppsItem.
   * @property {string} name The name of the app to be deleted from the
   * distribution group
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppsAppsItem
   *
   * @returns {object} metadata of AppsAppsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'apps_appsItem',
      type: {
        name: 'Composite',
        className: 'AppsAppsItem',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppsAppsItem;
