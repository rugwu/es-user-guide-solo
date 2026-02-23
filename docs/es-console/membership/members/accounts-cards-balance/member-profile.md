---
sidebar_position: 2
title: Member Profile
---

# Member Profile

:::info
Some functions on this page may not be available in your version of Console depending on configuration. 
:::

Expand the **Member Profile** section to find and manage the details of a member’s profile, including their email address, name, DOB, gender, phone number, address, member type (which is non-selectable (information only) and set to **Employee** or **Non-Employee**), and subscriptions to email communications.

Mandatory fields are marked with asterisks. Which fields are mandatory is configured to meet your company's needs. The Profile Completion activity will not be triggered until all mandatory fields for your configuration have been submitted with valid values.

The member profile includes Personally Identifiable Information (PII) including first and last name, email address, phone number, etc. PII refers to information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. 

The use and protection of this information is subject to legislation such as the California Consumer Privacy Act (CCPA) and may also be subject to your company's policies on the protection of personal information. On closing an account, there is an option to mask all of a member's PII data to prevent it from being used in future.

You can do the following with the Member Profile:

- Make general changes to the member profile
- Make changes to the member's preferred language (if enabled for client)
- Make changes to email communications opt-in settings
- Make changes to SMS communications opt-in settings (if enabled for client)
- Email Address Book - Fulfillment Emails

Guidelines:

- If the loyalty program is configured for a Canadian client, the address fields Province and Postal Code are displayed in the member's profile; if the program is configured for an American client, then State and Zip Code are displayed.
- If you want to set selected fields that are optional to not accept blank values, contact your Exchange Solutions TSA. Optional fields can be set to be validated (or not) to ensure that blank values are not saved for those fields.
- If an email address used in registration is already being used for an existing member (regardless of case), and the ACCOUNT_EMAIL field is set to locked in the configuration files, then the new registration is not allowed and an error message is returned. If the ACCOUNT_EMAIL field is not set to locked in configuration, then the new registration is allowed. If the ACCOUNT_EMAIL field is locked, and an account is closed, then that account email address lock is removed and the email address can be used again for registration (for example, if the same customer registers as a member once again).
- If a phone number in an existing account is then assigned to a new account on registration, it will be deleted from the existing account to assign it to the new account. In this way, phone numbers can be re-assigned as required.

Unregistered card or account numbers can also be searched, but all required fields in the account will be blank, the **Account Status** will be displayed as “Unregistered” and **Registration Date** will be set to “Not Registered”. Card activity, however, will be available for the agent to view (e.g., points balance and transaction history).

## Make changes to a member's profile

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.
2. Expand the **Member Profile** section.
3. Make changes directly in the fields and settings on that page.
4. When you are done, click **Update Profile** to save the changes or click **Discard Changes** if you have decided not to make any changes.

### Change a member's preferred language

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.
2. Expand the **Member Profile** section.
3. Go to the **Language Preferences** dropdown. Note that this control only appears if it has been enabled for the client.
    ![An overview of the language preference section](../../../../../images/Language%20Preference.png)
4. Select the preferred language for the member from the dropdown list of options.
5. When you are done, click **Update Profile** to save the changes or click **Discard Changes** if you have decided not to make any changes.

### Change a member's email communication settings

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.
2. Expand the **Member Profile** section.
3. Scroll down to the **Select topic(s)**... subsection.
4. Make selections for the email communications to which the member will be subscribed. When you are done, click **Update Profile** to save the changes or click **Discard Changes** if you have decided not to make any changes.
     ![An overview of the email communications selector section](../../../../../images/Email%20Communications%20Selector.png)

### Change a member's SMS (messaging) communication settings

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.
2. Expand the **Member Profile** section.
3. Scroll down to the **Phone Number** field and ensure that the valid phone number provided is the correct phone number (or enter a valid phone number as it is necessary for subscribing to SMS). If you provide or change the number, click **Update Profile** at the bottom of the page. 

    :::info
    If the phone number entered is already being used by another member, then the number will be added to this account and deleted from the other member's account. Depending on configuration and integration, this member may receive an "added" email and the other a "deleted" email message.
    :::
4. Scroll to the **SMS Subscription** subsection. Check the **STATUS** of the subscription. Note that currently, only one **SHORT CODE** is supported, although more short codes may be supported in future. Also, a SMS subscription cannot be created if the member does not have a phone number saved in their profile. Choose one of the following actions:
    1. To add a phone number for a member, add it in the **Phone Number** field, then click **Update Profile**. The member will receive an email verifying that the phone number has been added. If there is an account already using that phone number, then the number is added to the account to which it has just been added and deleted from the account that was using the phone number previously. Both members will receive an email notification, the one adding the phone number to verify that it has been added, and the one previously using the phone number to indicate that it has been deleted from their account.  
    2. To change the phone number for a member who is already **OPTED IN** to an SMS subscription, change the number in the **Phone Number** field, then click **Update Profile** and the new number is used for the existing SMS subscription. The member will get an email verifying the update.
    3. To subscribe a member who already has a valid phone number to an **SMS Subscription**, click the **Opt In** button next to the subscription.
    4. To unsubscribe a member who is currently subscribed to SMS (**OPTED IN**), click the **Opt Out** button next to the subscription.
    5. To delete a phone number, remove it from the **Phone Number** field, then click **Update Profile**. No subscription status will be shown in the SMS Subscription section once this is done. The same is true if the phone number is removed through one of the APIs or feeds.

    :::info
    This feature may not be shown unless your loyalty program is configured to send SMS messages to members.
    :::

## Email Address Book - Fulfillment Emails

To support specific fulfillment functionality, there may be additional email addresses provided (for example, for store owners) to receive notifications on fulfillment of a redemption for a member. A redemption fulfillment email is sent to one or more email address(es) different from the account email address. 

If this functionality is enabled, then information for any related fulfillment email addresses are shown in a table. The information included is a unique identifier and an email address for each of these fulfillment email addresses which together constitute an Email Address Book.

![An overview of an email address book](../../../../../images/Email%20Address%20Book%20-%20Fulfillment%20Emails.png)


If this fulfillment notification functionality is enabled, but there are no fulfillment email addresses available, then the table will be shown with a message indicating this state. The information shown in the table is read-only. The email addresses are checked against an approved list, and if any are not valid, an error message is displayed.