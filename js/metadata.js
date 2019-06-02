function checkrobot(f)
{
  return f.roboton.checked;
}

function checkvalid(f)
{
  return f.revisiton.checked;
}

function checkcomment(f)
{
  return f.commenton.checked;
}

// Which ROBOT-text has been selected ?
function getChoiceRobot(f)
{
  for (var i = 0; i < f.rotext.length; i++)
  {
    if (f.rotext.options[i].selected == true)
    {
      return f.rotext.options[i].text
    }
  }
  return null
}

// Which REVISIT-Type has been selected ?
function getChoiceRevisit(f)
{
  for (var i = 0; i < f.retype.length; i++)
  {
    if (f.retype.options[i].selected == true)
    {
      return f.retype.options[i].text
    }
  }
  return null
}

function MaakTags(f)
{
  // Description first
  var txt = '<!-- made by www.metatags.org -->\r\n<meta name="description" content="' + f.description.value + '" />\r\n';
  
  // Keywords
  txt += '<meta name="keywords" content="' + f.keywords.value + '" />\r\n<meta name="author" content="metatags generator">\r\n';
  
  // ROBOT Metatag
  if(checkrobot(f)) txt += '<meta name="robots" content="' + getChoiceRobot(f) + '">\r\n';

  // REVISIT Metatag
  if(checkvalid(f)) txt += '<meta name="revisit-after" content="' + f.revisittimes.value + ' ' + getChoiceRevisit(f) + '">\r\n';

  // html title
  if(f.titletext.value.length != 0) txt += '<title>' + f.titletext.value + '</title>\r\n';

  // Extra comments
  if(checkcomment(f)) txt += '<!-- ' + f.commenttext.value + ' -->\r\n';

  f.metatags.value = txt;
  f.metatags.focus();
  f.metatags.select();
}

function ResetPage(f)
{
  if(confirm("Are you sure you want to clear all fields and start all over?"))
  {
    f.reset();
  }
}


function explain_section(_section)
{
  var explain_text = "";
  switch(_section)
  {
    case "robot":
      explain_text = "(c) Metatags | The ROBOT-TAG specifies what should be indexed and how.\r\n\n" +
                     "     INDEX     = index the complete website\r\n" +
                     "     NOINDEX   = don't index the complete website\r\n" +
                     "     FOLLOW    = follow the links in the website\r\n" +
                     "     NOFOLLOW  = don't follow the links in the website";
      break;

    case "revisit":
      explain_text = "(c) Metatags | The REVISIT-TAG specifies when a searchengine has to return to your site for a reindex.\r\n\n" +
                     "You're able to enter days (DAYS) or months (MONTH). The number of days should be a number from 1 to 31.\r\n\n" +
                     "Enter a realistic value.";
      break;

    case "comment":
      explain_text = "(c) Metatags | This is an unknown metatag. By adding the three most important keywords in this additional description " +
                     "some searchengines will increase your score in the results. Please enter a maximum of 3 keywords, seperated by a comma.";
      break;

    case "title":
      explain_text = "(c) Metatags | A carefully chosen title is important to have your website be found by the searchengines.\r\n\n" +
                     "If your website is shown on the resultspage of a searchengine, the title will be the link of the result.";
      break;

    case "description":
      explain_text = "(c) Metatags | If the link or title of your website drew the attention, visitors will also read the additional summary below the link\r\n" +
                     "Draw the attention by using short and powerfull description!";
      break;

    case "keywords":
      explain_text = "(c) Metatags | Strong keywords can make the difference between the topmost position in the searchresults or not beeing found at all.\r\n\n" +
                     "Try to think like your customer and use the keywords you expect them to look for.";
      break;

    default:
      return false;
      break;
  }

  alert(explain_text);
  return true;
}


function mt_wizard_validate(f)
{
  if (f.description.value == "")
  {
    alert("No 'description' given.");
    f.description.focus();
    f.description.select();
    return (false);
  }

  if (f.description.value.length > 200)
  {
    alert("The maximum length of the description field is 200 characters.\nCurrently you've entered " + f.description.value.length + " characters.");
    f.description.focus();
    f.description.select();
    return (false);
  }

  var checkOK = "0123456789-";
  var checkStr = f.revisittimes.value;
  var allValid = true;
  var decPoints = 0;
  var allNum = "";

  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    allNum += ch;
  }

  if (!allValid)
  {
    alert("'" + f.revisittimes.value + "' is an invalid value for the REVISIT metatag; please limit to using numbers.");
    f.revisittimes.focus();
    f.revisittimes.select();
    return (false);
  }

  var chkVal = allNum;
  var prsVal = parseInt(allNum);
  if (chkVal != "" && !(prsVal > 0 && prsVal <= 31))
  {
    alert("The REVISIT value should be a number from 1 to 31.");
    f.revisittimes.focus();
    f.revisittimes.select();
    return (false);
  }

  return (true);
}


function stopError()
{
  return true;
}
window.onerror = stopError;


window.onload = function(){

  if(document.forms[0])
  {
    document.forms[0].elements[0].focus();
    document.forms[0].elements[0].select();
  }
}