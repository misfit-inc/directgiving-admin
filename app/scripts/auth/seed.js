'use strict';

angular.module('dgAuth')
.factory('Seed', function (Donor, Entry, Cause, Organization, Admin, ImpactGoal) {
  return {
    it: function () {
      Donor.create({ email: 'test@test.gmail.com', password: 'hi' });
      Donor.create({ email: 'bob@burger.com', password: 'hi' });

      Organization.create({
        'name': 'Unicef',
        'description': 'The biggest boy on the playground.',
        'location': '5.84978,10.32424'
      }).$promise.then(function (organization) {
        Admin.create({ email: 'd@delw.in', password: 'hi', organizationId: organization.id });
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
        }).$promise.then(function (cause) {
          ImpactGoal.create({
            'description':'Give a kid a food',
            'name':'Feed a kid',
            'amount':25,
            'causeId':cause.id
          });
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
        });
      });

      Organization.create({
        'name': 'charity:water',
        'description': 'Gonna help you with your thirst',
        'location': '5.84978,10.32424'
      }).$promise.then(function (organization) {
        Admin.create({ email: 'ian.seyer@gmail.com', password: 'hi', organizationId: organization.id });
        Cause.create({
          'name':'Village Wells',
          'featuredImage':'http://www.wvi.org/sites/default/files/styles/article_full/public/charity%20water%20photo%20Malawi.jpg',
          'position': '5.84978,10.32424',
          'organizationId':organization.id,
          'totalGoal':0,
          'goalText':'Here\'s the goal',
          'aspiration':'End thirst',
          'body':'A bunch of <strong>HTML-formatted</strong> text can make up this body, which will eventually come from a <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYG</a> editor in the backend.',
          'indexText':'Villages need wells, because humans need water!'
        }).$promise.then(function (cause) {
          ImpactGoal.create({
            'description':'Build a village well',
            'name':'Village well',
            'amount':250,
            'causeId':cause.id
          });
        });
        Cause.create({
          'name':'Master Shake\'s Danger Cave',
          'featuredImage':'https://joshuscat.files.wordpress.com/2011/06/aquateen_vol1_mastershake.jpg',
          'position': '-14.340278,48.502778',
          'organizationId':organization.id,
          'totalGoal':550000,
          'goalText':'Help Master Shake build a danger cave',
          'aspiration':'End aqua teen thirst',
          'body':'<p>Master Shake is a lazy, selfish, arrogant life-sized anthropomorphic milkshake, who is a pathological liar and frequently torments Meatwad and annoys the rest of the characters for attention. Although his full name is Master Shake, he is mainly called "Shake" and in "Last Last One Forever and Ever" he is known as "Don Shake". Master Shake was created and designed by series creators Dave Willis and Matt Maiellaro, and is voiced by Dana Snyder.</p><p>Like the other main characters, Frylock and Meatwad, Master Shake first appeared in the Space Ghost Coast to Coast episode "Baffler Meal", and then made his first official appearance in the show\'s first episode, "Rabbot". Master Shake was originally voiced by Dave Willis in "Baffler Meal" and was performed as a live action person by Jon Benjamin in the season six episode "Last Last One Forever and Ever". Master Shake has appeared in several video games and albums relating to the series including the 2007 film Aqua Teen Hunger Force Colon Movie Film for Theaters. Shake has also made cameos in promotional material and other media outside of the series.',
          'indexText':'Master Shake is a lazy, selfish, arrogant life-sized anthropomorphic milkshake, who is a pathological liar and frequently torments Meatwad and annoys the rest of the characters for attention.'
        });
      });
    }
  };
});