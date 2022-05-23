var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.fluux.io');

var topic = 'vha/bed_coordinates';
var topic1 = 'vha/privacy_timeout';
var topic2 = 'vha/automatic_detection';
var topic3 = 'vha/patient_gestures';

var bed_coordinates = JSON.parse(
  '{"bed_coordinates": [10, 3, 4, 5, 2, 6, 5, 1]}'
);
var privacy_timeout = JSON.parse('{"privacy_timeout": "01:00"}');
var automatic_detection = JSON.parse('{"automatic_detection": "true"}');
var patient_gestures = JSON.parse('{"gesture": "sitting"}');

client.on('connect', () => {
  setInterval(() => {
    client.publish(
      (topic = 'vha/bed_coordinates'),
      JSON.stringify(bed_coordinates)
    );

    client.publish(
      (topic1 = 'vha/privacy_timeout'),
      JSON.stringify(privacy_timeout)
    );

    client.publish(
      (topic2 = 'vha/automatic_detection'),
      JSON.stringify(automatic_detection)
    );

    client.publish(
      (topic2 = 'vha/patient_gestures'),
      JSON.stringify(patient_gestures)
    );

    console.log('Bed coordinates:', bed_coordinates);
    console.log('Privacy timeout:', privacy_timeout);
    console.log('Automatic detection:', automatic_detection);
    console.log('Patient gestures:', patient_gestures);
  }, 5000);
});
