# splunk_ES_xtras
A Splunk "app" which includes xtras that don't come with ES itself and have been requested by many customers on my years of at Splunk PS

# What it adds?
At the moment the following items are part of this app:
- A Cyber Threat Intelligence dashboard that maps the classic "Kill Chain" to both notable hits and correlation searches
For this to work the following resources are available on the app:
- A kvstore-based lookup with a list of correlation searches and kc levels, where the mapping happens
- a saved search that hourly (default) updates the above lookup
- a dashboard with three panels:
 -- A upper panel with a dashboard representing the above
 -- A middle panel with a map dashboard which will map notables to geolocations (this is TBC in this release)
 -- A lower pannel with a table showing correlation searches that haven't been setup yet

# Install
This app installs as any other splunk TA or App, install only on your ES SH. Check the following links to know more about it:

Difference between an app and a TA
https://docs.splunk.com/Documentation/Splunk/7.2.4/Admin/Whatsanapp

How to install an app or technical add-on (TA)
https://docs.splunk.com/Documentation/AddOns/released/Overview/Singleserverinstall

# Configuration

1) Add the dashboard to the ES navigator
Firstly, You will need to add the dashboard to the ES navigator in order to use it on ES. Check the following to know how to do this:
https://docs.splunk.com/Documentation/ES/5.2.2/Admin/Customizemenubar

If you want to add it to right after threat activity, you can run sed to modified the "default.xml" navigation file
sed -i 's#name="threat_activity"></view>#name="threat_activity"></view><view name="cyber_threat_intel_posture"></view>#' $SPLUNK_HOME$/etc/apps/SplunkEnterpriseSecuritySuite/local/data/ui/nav/default.xml

2) Map your correlation searches to the kill chain
The other important point is to make sure to setup your CS and map them to the kill chain stages as you think they should be mapped. To do this, just populate the lookup "cs_to_kc_mappings" (you might have to make the lookup manageble by ES first to be able to see it on the "Lookup Editor". Note: don't mess with the _key field of the lookup

# Tested
Only on my own testbed, so it is to be used at your own risk

# To do
Further testing
Add any other dashboards and improvements
Provide defaults for the correlation searches kc mappings
