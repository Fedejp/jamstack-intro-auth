//any page matching /dashboard will be redirected to dashboard component
 // this give us the ability to have private routing within the dashboard
 exports.onCreatePage = async ({ page, actions }) => {
    if (page.path.match(/^\/dashboard/)) {
      page.matchPath = '/dashboard/*';
      actions.createPage(page);
    }
  };