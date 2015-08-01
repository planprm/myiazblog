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
function print_r(theObj){
  if(theObj.constructor == Array ||
     theObj.constructor == Object){
    document.write("<ul>")
    for(var p in theObj){
      if(theObj[p].constructor == Array||
         theObj[p].constructor == Object){
document.write("<li>["+p+"] => "+typeof(theObj)+"</li>");
        document.write("<ul>")
        print_r(theObj[p]);
        document.write("</ul>")
      } else {
document.write("<li>["+p+"] => "+theObj[p]+"</li>");
      }
    }
    document.write("</ul>")
  }
}

wallGet(-45995544);

function wallGet(owner_id)
{
	VK.Api.call('wall.get', {owner_id: owner_id}, function(r) {
      if(r.response) {
      	  print_r(r);
      	  $('.wall_gets')
      	  .html('<img src="' + r.response[3].src_small + '"><br/>'
      	  	     + r.response[1].text
      	  	   );
      }
   });
}

 