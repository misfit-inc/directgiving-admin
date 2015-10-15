'use strict';

angular.module('dgAuth')
.factory('Seed', function (Donor, Entry, Cause, Organization, Admin, ImpactGoal) {
  return {
    it: function () {
      Admin.create({ email: 'd@delw.in', password: 'hi' });
      Admin.create({ email: 'ian.seyer@gmail.com', password: 'hi' });
      Donor.create({ email: 'test@test.gmail.com', password: 'hi' });
      Donor.create({ email: 'bob@burger.com', password: 'hi' });
      
      Organization.create({
        'name': 'Unicef',
        'description': 'The biggest boy on the playground.',
        'location': '5.84978,10.32424'
      }).$promise.then(function (organization) {
        Cause.create({
          'name':'Food for Children',
          'featuredImage':'http://www.unicef.org.uk/Images/Media-medium-201x106/corporate-partners.jpg',
          'position': '5.84978,10.32424',
          'organizationId':organization.id,
          'totalGoal':0,
          'goalText':'Here\'s the goal',
          'aspiration':'End hunger',
          'body':'A bunch of <strong>HTML-formatted</strong> text can make up this body, which will eventually come from a <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editor in the backend.',
          'indexText':'This text will describe the cause on the index page'
        });
        Cause.create({
          'name':'Aqua Teen Hunger Force',
          'featuredImage':'http://stuffpoint.com/aqua-teen-hunger-force/image/174063-aqua-teen-hunger-force-aqua-teen-hunger-force.jpg',
          'position': '-14.340278,48.502778',
          'organizationId':organization.id,
          'totalGoal':28000,
          'goalText':'This money will go directly towards television.',
          'aspiration':'End aqua teen hunger',
          'body':'Body text for the cause, can incorporate <em>fancy schmancy</em> <strong>HTML</strong>.',
          'indexText':'Aqua Teen Hunger Force is an American animated television series created by Dave Willis and Matt Maiellaro for Cartoon Network\'s late night programming block, Adult Swim.'
        }).$promise.then(function (cause) {
          ImpactGoal.create({
            'description':'Give a kid a food',
            'name':'Feed a kid',
            'amount':25,
            'causeId':cause.id
          });
        });
      });
    }
  };
});