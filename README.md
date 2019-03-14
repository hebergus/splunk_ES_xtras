# splunk_ES_xtras
A Splunk "app" which includes xtras that don't come with ES itself and have been requested by many customers on my years of at Splunk PS

# What does it adds?
At the moment the following items are part of this app:<br>
- A Cyber Threat Intelligence dashboard that maps the classic "Kill Chain" to both notable hits and correlation searches<br>
For this to work the following resources are available on the app:<br>
- A kvstore-based lookup with a list of correlation searches and kc levels, where the mapping happens<br>
- a saved search that hourly (default) updates the above lookup<br>
- a dashboard with three panels:<br>
-- A upper panel with a dashboard representing the above<br>
-- A middle panel with a map dashboard which will map notables to geolocations (this is TBC in this release)<br>
-- A lower pannel with a table showing correlation searches that haven't been setup yet<br>

# Install
This app installs as any other splunk TA or App, install only on your ES SH. Check the following links to know more about it:

<br>Difference between an app and a TA
<br>https://docs.splunk.com/Documentation/Splunk/7.2.4/Admin/Whatsanapp

<br>How to install an app or technical add-on (TA)
<br>https://docs.splunk.com/Documentation/AddOns/released/Overview/Singleserverinstall

# Configuration

<br>1) Add the dashboard to the ES navigator
<br>Firstly, You will need to add the dashboard to the ES navigator in order to use it on ES. Check the following to know how to do this:
<br>https://docs.splunk.com/Documentation/ES/5.2.2/Admin/Customizemenubar
<br>
<br>If you want to add it to right after threat activity, you can run sed to modified the "default.xml" navigation file
<br>sed -i 's#name="threat_activity"></view>#name="threat_activity"></view><view name="cyber_threat_intel_posture"></view>#' $SPLUNK_HOME$/etc/apps/SplunkEnterpriseSecuritySuite/local/data/ui/nav/default.xml

<br>2) Map your correlation searches to the kill chain
<br>The other important point is to make sure to setup your CS and map them to the kill chain stages as you think they should be mapped. To do this, just populate the lookup "cs_to_kc_mappings" (you might have to make the lookup manageble by ES first to be able to see it on the "Lookup Editor". Note: don't mess with the _key field of the lookup

# Tested
<br>Only on my own testbed, so it is to be used at your own risk

# To do
Further testing<br>
Add any other dashboards and improvements<br>
Provide defaults for the correlation searches kc mappings<br>
