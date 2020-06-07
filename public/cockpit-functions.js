function cockpitSpawn(updateData, cockpitError) {
  cockpit.spawn(['/usr/local/bin/statusdemo']).stream(updateData).catch(cockpitError);
}
