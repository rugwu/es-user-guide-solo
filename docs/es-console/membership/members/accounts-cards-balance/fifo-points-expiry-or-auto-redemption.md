---
sidebar_position: 4
title: FIFO Points Expiry or Auto-Redemption
---


# FIFO Points Expiry or Auto-Redemption

First-In First-Out (FIFO) points are those that expired or redeemed a set amount of time after they are earned, regardless of the member’s activity. 

There may be business or accounting reasons for Program Administrators to make sure that points are either expired (no longer available) after a reasonable interval from when they were earned, or that those points are automatically redeemed to another currency such as an account credit or gift card. 

ES Loyalty™ currently supports two methods of points expiry - first, based on inactivity, and second, based on the configured lifetime of the points from when they were first earned. The latter is further separated into two options upon expiry: (1) to “sweep” or delete the points from the member’s account; or (2) to automatically redeem the points (for instance, by crediting them to a gift card that is sent to the member).

The first points earned are the first to expire (hence "FIFO"). Let's look at the two most common scenarios:

1. Expiry: After a pre-determined amount of time, points that have been earned on a member's account expire and are swept from the account. The time is set in months. For example, points that were earned in February 2025 and are set to expire after 24 months will expire at the end of February 2027.
2. Redemption: After a pre-determined amount of time, points that have been earned on a member's account are automatically redeemed and are put onto a gift card with the corresponding value. The card is sent to the member. The time is set in months. For example, points that were earned in February 2025 and are set to be auto-redeemed after 24 months will end up on a gift card sent to the member at the end of February 2027.



:::info
- This section will not appear if configuration is not set up to use FIFO Points Expiry or FIFO Points Redemption. It will not appear if not activated or if the account is invalid (status: CLOSED, DECEASED, or CANCELLED) or the feature is disabled.
- ES Loyalty™ supports multiple common market methods of expiring points. Changing program design while in market is a major system change and if you are interested in doing so for your program, please talk to your CST.
:::


### Working with FIFO points

You can view FIFO points due to be expired or automatically redeemed via the following steps:

1. From the top menu of the Console, select **Membership > Members**. Enter a member's **Card Number** or **Email** and click **Search**, then click on the record returned to open the member details page.
2. Click in the **FIFO...** section to expand that section. Depending on which method of dealing with points after an interval your company has chosen, you will see either the **FIFO Points Expiry** section or the **FIFO Automatic Point Redemption** information displayed. 

    :::info
    If the cadence for points expiry is set to **YEARLY** in the configuration file, this section will not show additional details by month. Only the top level, months to expiry, is shown.
    :::

    ![An overview of the FIFO points expiry section](../../../../../images/FIFO%20Points%20Expiry.png)

    ![An overview of the FIFO automatic point redemption section](../../../../../images/FIFO%20Automatic%20Points%20Redemption.png)

3. In this section, each Redeeming Month or Expiring Month and the associated Points for each upcoming month and the points affected are shown. The expiries or redemptions are shown for the the number of months set up in the administration section for this feature.
4. Use the controls at the bottom of the page to view additional pages of results or to show a different number of results on the page.