# How to Connect Your BigRock Domain to Netlify

Here is the step-by-step guide to connecting `jebinconstructions.com` to your Netlify site.

## Step 1: Add Domain to Netlify

1.  Log in to your **Netlify** dashboard.
2.  Select your site (`jebinconstructions.netlify.app`).
3.  Go to **Site configuration** > **Domain management**.
4.  Click **Add a domain**.
5.  Enter `jebinconstructions.com` and click **Verify**.
6.  Click **Add domain** again if prompted.
7.  Netlify will now check for DNS configuration. Since it's not set up yet, you will see an alert.

## Step 2: Configure Name Servers (Recommended Method)

This method lets Netlify manage your DNS, which makes setting up HTTPS (SSL) automatic and easier.

1.  In Netlify **Domain management**, find the section for **HTTPS** or **DNS**.
2.  Click **Check DNS configuration** or **Set up Netlify DNS**.
3.  Netlify will provide you with **4 Name Servers**. They typically look like:
    *   `dns1.p0?.nsone.net`
    *   `dns2.p0?.nsone.net`
    *   `dns3.p0?.nsone.net`
    *   `dns4.p0?.nsone.net`
    *(Copy these somewhere safe)*

## Step 3: Update BigRock Settings

1.  Log in to your **BigRock** account and go to the Domain Overview page (the one in your screenshot).
2.  Look for the section labeled **NAME SERVERS & DNS**.
3.  Click the button that says **Name Servers** (it should be outlined in blue).
4.  A popup or edit field will appear. Delete the existing `bigrock.in` addresses.
5.  **Paste the 4 Netlify Name Servers** you got in Step 2.
    *   *Example:* `dns1.p01.nsone.net`, `dns2.p01.nsone.net`, etc.
6.  Click **Update Name Servers** (or Save) to finish.

## Step 4: Verification

*   **Propagation Time:** changing Name Servers can take anywhere from **1 hour to 24 hours** to propagate globally.
*   Netlify will automatically verify the connection once the changes spread.
*   Once verified, Netlify will automatically provision an SSL certificate (HTTPS) for your site within a few minutes to an hour.

You can check the status in the Netlify **Domain management** panel.

## Common Questions / Troubleshooting

### Q: It is asking for an IP Address?
**You do NOT need an IP address.**

1.  **Wrong Button?** Make sure you clicked **Name Servers** (on the left), NOT "Child Name Servers" (on the right). Child Name Servers require IPs, but you don't want that.
2.  **Optional Field?** If you see a column for "IP Address" next to the Name Server text box, just **leave it blank**. Only the text (e.g., `dns1.p01.nsone.net`) is required.

