---
sidebar_position: 8
title: Member Tier Program
---

# Member Tier Program

The Member Tiers Program gives the member access to reward tiers based on their spending and behaviour. Each tier can be associated with a different reward profile and a different threshold spending amount.

The Member Tiers Program section accessible from the Member landing page provides information about the member's current tier program status, their eligible contribution, the tier period, and how far away they are from qualifying for the next tier. Tier information can also be updated from this section.

:::info
This feature may not appear in the Console depending on configuration and the user's role in the system.
:::

## View Tier Details

### To view the member's loyalty tier program details:

1. From the top menu of the Console, select **Membership > Members**. Select any option and fill in a valid value, then click **Search**. Then click on the record returned to open the member details page. The **Member** page of the source account opens.

2. Scroll down and click on the **Member Tiers Program** section to expand the section.

3. View the tiers program information for the selected member.

    ![An overview of a member's tier programs](../../../../../images/Member%20Tier%20with%20Next%20Period%20Status%20002.png)

The eligible contribution and the qualifying spend will reset at the end of the current tier period. The tier period can be monthly, quarterly, or yearly (annually) and is calculated from the start date. If the **Current Tier Status** is **Not Yet Qualified**, then the member has not yet completed the criteria to reach the bottom tier of the tier program.

If enabled, the **Achieved On** date shows when the current tier was achieved and **Next Period Status** shows what the tier level will be in the next period based on current contributions or spending. **Current Tier Contribution** shows how much has been spent toward the next tier, and **Distance to Next Tier** shows the remaining required spend.


## Update Member's Tier Status and Eligible Contribution

### To update a member's tier status and eligible contribution:

1. From the top menu of the Console, select **Membership > Members**. Select any option and fill in a valid value, then click **Search**. Then click on the record returned to open the member details page. The **Member** page of the source account opens.

2. Scroll down and click on the **Member Tiers Program** section to expand the section.

3. View the tiers program information for the selected member. If tiers are based on units purchased, there is a unit identifier in parentheses for the entries on the page; for example: **Total Eligible Contribution (Litres)**. If tiers are based on dollars spent, then the dollar sign ($) is shown.

4. To change the member's tier status and/or eligible contribution, click the **Update** button. A window opens to allow the tier status and eligible contribution to be changed.

5. Select a **New Tier Code** from the available codes in the dropdown list. Typically, the dropdown could include **Not Yet Qualified** as well as all the tier levels in the program.

6. **New Eligible Contribution** is pre-populated with the qualification threshold for that tier. You may enter a new value in this field as long as it is still within the range of that tier (if it is not, a validation error message is shown below the field). The value must also be a positive integer.

    ![An overview of the membership tier update](../../../../../images/Membership%20Tier%20Update%20Pre-Pop.png)

7. To apply the changes, click **Proceed**, then in the **Update Membership Tier** confirmation window, click **Accept**.

8. You are returned to the **Member Tiers Program** section. You can view the changes there. It may take a few minutes for any changes in **Eligible Contribution** to be shown on this page.

## Household Tier Rank

If the member is in a household, the tier status and eligible contribution can be changed for the **Primary** member, but it affects the household instead of just the individual member. The tier status and eligible contribution cannot be changed for **Secondary** members in a household; if there is an attempted change, then an error message is displayed directing the user back to the Primary member to make changes.

![An error message overview](../../../../../images/Error%20Message%20for%20Secondary%20Member.png)

When members join a household, their spend is aggregated to establish the household tier rank. If a member joins or leaves the household, or if there is an adjustment to a transaction, the addition or loss of their contribution may affect the household tier rank, both for the current period and/or (if rollover is being used) for the last period. If applicable, the end-of-period rollover tier level is based on the member contribution and the household tier rank.
