---
sidebar_position: 7
title: Manage Account Status
---

# Manage Account Status

Manage status on the account level from this page. Account statuses can only be modified for one account at a time. There are currently no features that allow account statuses to be changed for multiple accounts in one operation.

The primary card may have one of the following statuses:

1. **Active** — An **Active** account status with an active card status is the only combination of account and card statuses that allows both earning and redeeming rewards. An **Active** account may instead have one of the following statuses:

   - **Suspended** — Used to temporarily suspend redemption on a card, for instance, if there are signs of fraudulent activity. This allows an investigation to occur while blocking rewards on the account (the account can still earn rewards, but not redeem them). If the investigation clears the account, it can be made **Active** again.

   - **Lost or Stolen** — A **Lost or Stolen** status, referring to the primary card on an account, can still earn rewards, but not redeem them. This is a terminal state; the card cannot be made **Active** again.

   - **Damaged** — A **Damaged** status, referring to the primary card on an account, can still earn rewards, but not redeem them. This is a terminal state; the card cannot be made **Active** again. However, the card can be replaced.

   - **Fraud/Abuse** — If a card is under investigation for **Fraud/Abuse**, it can earn rewards, but not redeem them. If no fraud is found, the card can be set to **Active** again.

   - **Cancelled** — Used to cancel the card. A **Cancelled** card cannot earn or redeem rewards. This is a terminal state; the card cannot be made **Active** again.

2. Other account statuses do not have card statuses associated with them:

   - **Deceased** — Used in cases where the card holder has passed away. An account with a status of **Deceased** cannot earn or redeem rewards. In addition, if the member's phone number and phone number source are removed, and if the member was subscribed to SMS, the SMS subscription is removed from the account.

   - **Closed** — Used to close the account. A closed account cannot earn or redeem rewards.

   - **Expired** — This is not a setting accessible through the interface, but is an account status set by the system under certain conditions set by the client. For instance, if there is no activity on a member account for 2 years, the account may be expired, meaning that the points are swept and the account is rendered inactive. An **Expired** account can earn rewards, but cannot redeem rewards. Note that an Expired account cannot be changed to **Active** status, but other statuses can be applied.

   - **Suspended** — When an account is **Suspended**, it can still earn rewards, but not redeem them.

   - **Unregistered** — When an account is **Unregistered**, that means that essential information, such as the email address of the member, has not been provided. An **Unregistered** account can earn rewards, but usually cannot redeem them. However, there may be an exception for a member who is wary of providing their email address. If approved, an agent can set an **Unregistered** account in the Console to have the ability to redeem rewards.

### To navigate to the Account Status section on the member's page

1. Navigate to **Membership > Members**, select a search method, and fill in or select the corresponding value.
2. Click **Search** to find the member.
3. Click on a member in the list that is returned by the search to open the member's page.
4. Scroll down and open the **Manage Account Status** section on the page.


## Viewing or Changing the Main Account Status

Note that this section does not include information about suspending or closing an account. To make those changes, see the procedures below.

### To view and/or change the account status from the main menu

1. Navigate to the **Manage account status** section for the member using the procedure shown above.
2. Click on the menu in the middle of the page to see some of the available statuses.

   - For most accounts, **Active** (able to receive reward points) is already selected, indicating that the account is fully functional, the member is registered, and reward points can be received and redeemed.
   - **Deceased** status is used when the account member has passed away.
   - **Cancelled** is used to render the account unable to receive additional reward points or redeem points.
   - You will also see an **Unregistered** option greyed out on the menu. This was the original status of the card before member information was provided, and cannot be selected once the card has been set to **Active** (because there is member information associated with the account). If the card has not been registered on an account, this entire section will look different and the account status will be set to **Unregistered**.

3. After making the selection, click **Update Status**. Click **Accept** in the confirmation window. You will see a message confirming that the new status is set.


## Suspending an Account

An account might be suspended if fraudulent activity is suspected and if an investigation must take place to determine if fraud is occurring. Suspend is a temporary state until the investigation has been completed and it blocks redemptions on the account. If the investigation clears the account of fraudulent activity, then the account can be unsuspended.

### To suspend an account

1. Navigate to the **Account Status** section for the member using the procedure shown above.
2. Click on the **More** menu at the bottom of the page.
3. Select **Suspend Account**.
4. In the window that opens, select a **Reason Code** for suspending the account, then (optionally) provide **Details** about the reason. Click **Suspend Account**. The account will be suspended.

### To unsuspend an account

1. Navigate to the **Account Status** section for the member using the procedure shown above.
2. Click on the **More** menu at the bottom of the page.
3. Select **Reinstate Account**.
4. In the window that opens, select a **Reason Code** for reinstating the account, then (optionally) provide **Details** about the reason. Click **Reinstate Account**. The account will be reinstated.


## Closing an Account

An account can be closed if the member has not used the account for a specified (usually very long) period of time or has communicated that they no longer need the account. When an account is closed, it is no longer able to receive or redeem rewards, and:

- The member account status is set to **"Closed."**
- All cards related to the account are set to **"Cancelled."**
- If the member is the **Primary** member in a household, the member will be removed and the household disbanded. If the member is a **Secondary** member of a household, they are removed from the household.
- The **Directory**, **Post Purchase Earn**, and **Notes** buttons on the member page are disabled.
- Any partner links are removed from the account.
- External Member Data (EMD) associated with the member is removed.

In addition, when closing an account, the agent can select additional options to comply with company practices and/or regulations regarding the protection of member data by setting balances to zero and/or anonymizing member PII data:

- **Zero Balance** — Carries out a process to zero out the account balances (if any) through a discretionary transaction and sets the reason to **"Account Closure."** If **Zero Balance** is selected, then a discretionary transaction takes place to remove all the points from the account. This is shown under the **Transactions** tab with the **Reason Code** set to **"Account Closure."**

- **Anonymize Member Data** — Anonymizes all Personal Identifiable Information (PII) for the member based on the configured data cleansing settings.

Note that the procedure below applies to closing a single account at a time. If you require a number of accounts to be closed, contact your Exchange Solutions TSA to get information about your options.

### To close an account

1. Navigate to the **Account Status** section for the member using the procedure shown above.
2. Click on the **More** menu at the bottom of the page.
3. Select **Close Account**.
4. In the **Account Closure** window, you have the option to simply close the account, which will set the conditions for the Account Closure process. You can also select one or both of the options shown, **Zero Balances** and/or **Anonymize Member Data**. See the descriptions of these options above. Make your selections, then click **Close Account**.
5. In the confirmation window, click **Accept** to complete the closure process. You will see a message indicating that the account has been closed. You will also see the **Account Status** at the top of the page changed to **Closed** and the **Card Status** set to **Cancelled**. If you selected **Zero Balances**, the balances at the top of the page will be set to zero, and if you chose **Anonymize Member Data**, the member profile data will be anonymized.
