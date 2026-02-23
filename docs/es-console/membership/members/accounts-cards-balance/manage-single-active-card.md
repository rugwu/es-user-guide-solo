---
sidebar_position: 5
title: Manage Single Active Card
---

# Manage Single Active Card (in Manage Cards section)

The **Manage Cards** section shows the card with the **Active** status at the top of the section. You can click the icon next to any card number to copy that number or use the dropdown option for a card to change the **Card Status**.

Note that this section only appears if Multiple Active Cards are **not** activated. If they are activated, then a section named **Cards** appears instead. The instructions for carrying out the following procedures differ for that other section. In addition, only the client service agent has access to this feature in the Console. The member may be able to initiate card management processes such as getting a card, but only the agent can use the Console to manage cards.

A card is considered valid if it can be used to enroll in the loyalty program. The card is considered valid for enrollment if it is allocated but not linked to a registered account, or if it is linked to an unregistered account. Conversely, the card is not valid for enrollment if it is linked to a registered account with a status such as **Active** or **Suspended**. A card is not valid for enrollment if the status is **Cancelled** or **Deceased**.

:::note
The **Manage Cards** section will appear if configuration **is not set up** to use Multiple Active Cards. If this section does appear, the **Cards** section will not appear.
:::

A card may have any one of the following statuses:

- **Active**: The card is in good standing. The customer is eligible to earn and redeem points.

- **Suspended**: The card has been put into suspended status by the call or customer service center if there is suspicious or fraudulent activity occurring. The customer cannot earn or redeem. The card may be put back into Active status or may be progressed to Fraud/Abuse or Cancelled status, depending on the outcome of a review of card activity.

- **Lost or Stolen**: The customer has reported their card as being either lost or stolen. Customers are not able to redeem when their cards are in this status. This is a terminal state (the card cannot be set back to Active).

- **Damaged**: The physical card has been damaged and must be replaced. The setting renders the current card inactive and this is a terminal state (the card cannot be set back to Active).

- **Fraud/Abuse**: There has been an investigation resulting in a finding of fraud or abuse using this card. The setting renders the card inactive, but it can be set back to Active status if the investigation finds no fraud or abuse.

- **Cancelled**: The card has been cancelled, for example, upon a request from the member. This setting renders the card permanently inactive and it cannot be used again (it cannot be set back to Active).

- **Non-Loyalty**: This status is available for one Exchange Solutions client for their internal purposes and only appears if the configuration is set correctly.


:::note
A card cannot be added if the account status is **Closed**. If you try to add a card (**Plastic** or **Digital**) to a **Closed** account, you will see an error message.
:::


## View the Manage Cards section

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.

2. Click in the **Manage Cards** section to expand that section. You will see the cards associated with that member and have access to options to manage the cards. The **Date**, **Card Status**, and **Card Number** is shown for each card.

## To update card status

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.

2. Click in the **Manage Cards** section to expand that section.

3. For a specific **Card Number**, on the **Active** dropdown, select a different status.

4. Once you have made your selection, click **Update Status**.

5. A **Warning** window opens to confirm the change in card status. If you agree, click **Accept** to make the change.

The card status is updated. For example, if the card was **Active** and is now set to a different status, the **Card Status** now shows that new status.

:::caution
If you want the account to still have a usable loyalty card, then DO NOT set the card to a terminal status (such as **Lost or Stolen**, **Damaged**, **Fraud/Abuse**, or **Cancelled**) using **Update Status**. Instead, use **Update and Replace**, then use the **Replace Card** section to make sure there is still a usable, active card for this account.
:::

## To replace a card

1. From the top menu of the Console, select **Membership > Members**. Select a search method and enter the information for that method. Click **Search**, then click on the record returned to open the member details page.

2. Click in the **Manage Cards** section to expand that section.

3. For a specific **Card Number**, on the **Card Status** dropdown, select a different status. Note that if you set the status to **Lost or Stolen**, **Damaged**, or **Cancelled**, the card will be permanently deactivated.

4. Click **Replace**.

5. A window opens to allow you to replace the card. Select whether you want to replace the current card with a **Physical** or **Digital** card. If you are using a physical card, enter the card number in the **Enter card number** field below. Card numbers are allocated from a pool of card numbers managed by Exchange Solutions card services. If you require more information about the inventory of cards you can use, talk to your Exchange Solutions representative. If you are replacing a card and select **Digital**, a digital card number is generated automatically (a pool of physical cards is not required) and the **Enter card number** field will be greyed out. In both cases, you can also **Enter card label** or an identifiable name to the card as well.

    ![An overview of the cards section](../../../../../images/Replace%20Card%20Updated.png)

6. Click **Replace**.
7. In the confirmation window, click **Accept** to complete the replacement. You will see a message that the card has been replaced.


The replacement card is added and the previous card is set to the status you selected.