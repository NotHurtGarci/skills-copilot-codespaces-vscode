function skillsMember(){
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        scope: {
            member: '=',
            index: '=',
            remove: '&'
        },
        controller: function($scope){
            $scope.member.skills = $scope.member.skills || [];
            $scope.addSkill = function(){
                $scope.member.skills.push({name: '', level: ''});
            };
            $scope.removeSkill = function(index){
                $scope.member.skills.splice(index, 1);
            };
        }
    }
}