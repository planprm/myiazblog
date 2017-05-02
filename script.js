VK.init({
    apiId: 5005065 // ID вашего приложения VK
});

var membersGroups = []; // массив участников группы
getMembers(45995544);

// получаем информацию о группе и её участников
function getMembers(group_id) {
	VK.Api.call('groups.getById', {group_id: group_id, fields: 'photo_50,members_count', v: '5.27'}, function(r) {
			if(r.response) {
				$('.group_info')
				.html('<img src="' + r.response[0].photo_50 + '"/><br/>' 
					+ r.response[0].name
					+ '<br/>Участников: ' + r.response[0].members_count);
			}
	});
}

//-45995544

wallGet(-45995544);

var countNum = 5;

function wallGet(owner_id)
{
	VK.Api.call('wall.get', {owner_id: owner_id/*, count: countNum*/}, function(r) {
      if(r.response) {
          console.log(r.response);
	  $('.wall_gets').html(r.response);    
      	  $('.wall_gets')
      	  .html(
		'<div class="left"><img src="' + r.response[1].media.thumb_src + '"/></div><br/>'
      	  	+ '<div class="wall_text">' + r.response[1].text + '</div>'
      	  );
	  $('.wall_gets')
      	  .html(
		'<div class="left"><img src="' + r.response[2].media.thumb_src + '"/></div><br/>'
      	  	+ '<div class="wall_text">' + r.response[2].text + '</div>'
      	  );   
      }
   });
}

 
