---
sidebar_position: 10
title: Household Details
---

# Household Details

The **Household Details** section allows an agent, on behalf of a member, to set up a household (combining rewards points balances) with a **Primary** and one or more **Secondary** members. Typically, the Primary member will be able to see the details for all household members and the Secondary members will see only their own information, but this is based on privileges set on the **Householding** page. A member can belong to only one household, whether they are the Primary or Secondary, because their rewards are being made available to that household.

:::info
This section will not appear if configuration is not set up to use Households or if the user does not have the correct permissions.
:::

On redemption, the redeemed rewards points are withdrawn from member's balances in one of two ways, depending on configuration:

- **Proportionally** — For example, if three members (A, B, and C) had respective balances of 3 million, 2 million and 1 million points exactly, and 3 million points were redeemed, then A would contribute 1.5 million points, B 1 million points, and C 500,000 points. If the redemption logic is set to **PROPORTIONAL** (this is also the default), then each member in the household contributes in proportion to the points they have brought to the household total redeemable balance. If one or more members do not have a redeemable balance (zero redeemable points), then redeemed points are contributed proportionally by the remaining members.

- **By defined request** — For instance, the Primary member or head of household designates, through a user interface, how many points to contribute to the redemption from each specific member. This allows the primary member to control how the points will be drawn from member accounts. If the redemption logic is set to **REQUEST_DEFINED**, then a Secondary member with the right privileges will also be able to redeem points, but only from their own account.

A daily limit on redemption may be configured for members of a household, as they may be for individual members. For example, there may be a configured limit on how many points a member may redeem per day. If applicable, this limit or "cap" is displayed in the **Redeemable Household Balance** and **Redeemable Value** and as long as points are available (more than the cap), the limit applies to each member of the household.


![An overview of the Pre-Member Daily Redemption Cap](../../../../../images/Per-Member%20Daily%20Redemption%20Cap.png)


In addition, some products in the product catalogue can be excluded from the daily redemption cap (see **Redemption Identifiers** and **Redemption Catalogue** for more information).

If a member account that is part of the household has a negative balance, then that balance is subtracted from the **Available Household Balance**, which also may reduce the **Redeemable Household Balance** and **Redeemable Value** depending on the relative balances.

If a Secondary member leaves a household, then the remainder of the household continues on without that member’s point balance for redemptions. If a Primary member leaves a household, then the household is disbanded and all points are returned to each member of the household.

To set up a household by inviting other members from the Primary member’s page, navigate to the member page (**Membership > Members**, search for and open the member’s page), then scroll down and expand the **Household Details** section on the page.


## To view the details for a household

1. From the top menu of the Console, select **Membership > Members**. Select any option and fill in a valid value, then click **Search**. Click the record returned to open the member details page. The **Member** page of the source account opens.

2. Click in the **Household Details** section to expand that section. The details shown depend on the permissions assigned to the current member. Typically, primary members will be able to see information for all members, and each member for themselves. However, this is configurable.


## To set up a household

1. From the top menu of the Console, select **Membership > Members** to find the member who will be the **Primary member** of the household. Select any option and fill in a valid value, then click **Search**. Then click on the record returned to open the member details page. The **Member** page of the source account opens. Note that the balances shown at the top right of the page currently apply to this member only.

   ![An overview of the household section](../../../../../images/Household%20-%20Member%20Balance%20Before%20Joining.png)

2. Click in the **Household Details** section to expand that section. The section indicates that the current member is not a member of any household. Resulting from this procedure, the current member will become the Primary member of the household.

    ![An overview of the household section before becoming a house member](../../../../../images/Household%20-%20Household%20Section%20Before%20Becoming%20Household%20Member.png)

3. Click **Invite Member**. Fill in a **Card Number** or **Email** for a Secondary member for the household, then click **Search**.

    ![Inviting a household member ](../../../../../images/Household%20-%20Find%20Secondary%20Member%20Using%20Email%20Address%20(not%20in%20household).png)


4. Click the household button to invite the Secondary member. If you invite a member who is already part of a household (**IN HOUSEHOLD = Yes**), an error appears because a member cannot be added more than once or to more than one household.

   ![Clicking the household button](../../../../../images/Household%20-%20Click%20Button%20to%20Proceed.png)

5. In the confirmation window, click **Invite Member** to invite the first Secondary member to the household.

    ![Confirming the member invite](../../../../../images/Household%20-%20Confirmation%20to%20Invite%20Secondary%20Household%20Member%20002.png)

6. Processing occurs and a success message appears. The Primary member of the household is shown in the **Household Details** section, but Secondary members are only shown once they accept an invitation. The **Contribution** value shown is the redeemable balance in dollars.

     ![Viewing a household's primary member](../../../../../images/Household%20-%20Primary%20Member%20Only.png)

7. Repeat the process (from Step 3) to add more Secondary members. Either the Primary member or any Secondary member can invite additional members to the household. After acceptance and page refresh, Secondary members appear in the **Household Detail** section of all household members.

    ![Viewing a household's member list](../../../../../images/Household%20-%20List%20Showing%20Primary%20and%20Two%20Secondary%20Members.png)

    The balances shown on the page are cumulative balances for the household.
    ![Viewing a household's cumulative balances](../../../../../images/Household%20-%20Combined%20Household%20Balance%20After%20Joining.png)

8. If the Primary member is not yet seeing a Secondary member in their **Household Details** section, the invitee can be searched again to check status if the invitation is still pending.

    ![Viewing a household member's pending invitation](../../../../../images/Household%20-%20Invitation%20Pending.png)


## To accept an invitation to a household (invited Secondary member)

1. From the top menu of the Console, select **Membership > Members**, search and open the member details page.

2. Click in the **Household Details** section to expand it. If there is an invitation to become a Secondary member of a household, it is shown here.

   ![Accepting a household member's invite](../../../../../images/Household%20-%20Showing%20Invitation.png)

3. Click **Accept**, then **Accept** again in the confirmation window. The Secondary member's information appears in the **Household Details** section (depending on permissions).

    ![A secondary household member after accepting their invite](../../../../../images/Household%20-%20Secondary%20Member%20Information%20After%20Accepting.png)


    The Secondary member is now also shown in the **Household Details** section of the Primary member’s page.


## To decline an invitation to a household (invited Secondary member)

1. From the top menu of the Console, select **Membership > Members**, search and open the member details page.

2. Click in the **Household Details** section to expand it.

    ![Declining a household invitation](../../../../../images/Household%20-%20Showing%20Invitation.png)


3. Click **Decline**, then **Accept** in the confirmation window. A message confirms the invitation has been declined.


## To leave a household (Secondary member)

1. From the top menu of the Console, select **Membership > Members**, search and open the member details page.

2. Click in the **Household Details** section to expand it.

3. Click **Leave Household**, then **Accept** in the confirmation window. A success message appears and the member is removed from the household. Their household information no longer appears and their point balances revert to being their own.


## To leave a household (Primary member) and disband the household

:::info
When the Primary member leaves a household, the household is disbanded and each member’s points are once again made available to them alone.
:::

1. From the top menu of the Console, select **Membership > Members**, search and open the member details page.

2. Click in the **Household Details** section to expand it.

3. Click **Leave Household**, then **Accept**. A message confirms the household has been disbanded and all members leave the household with their respective balances.


## To view a transaction for a household redemption (from a member's page)

1. From the top menu of the Console, select **Membership > Members**, search and open the member details page.

2. Click the **Transactions** tab.

3. Find a transaction related to a household redemption (usually a transaction with **Finalize** or another session-closing **Transaction Type**).

4. Expand the transaction to view details. The transaction includes information about the redemption and contributors from the household.


    ![Viewing a household's transactions](../../../../../images/Household%20-%20Transaction%20for%20Primary.png)

