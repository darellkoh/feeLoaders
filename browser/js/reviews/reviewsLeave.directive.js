app.directive("reviewLeave", function(){
  return {
    restrict: "E",
    scope: {

      submitReview: "&",
      productId: "@"
    },
    template: `
    <form name="review" class="row padding-top">
      <div class="col-sm-4">
        <div class="form-element">
          <input type="text" ng-model="leaveReview.name" class="form-control" placeholder="Name*" required>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-element">
          <input type="email" ng-model="leaveReview.email" class="form-control" placeholder="Email*" required>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-element form-select">
          <select class="form-control" ng-model="leaveReview.rating">
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-element">
          <textarea rows="8" ng-model="leaveReview.review" class="form-control" placeholder="Review*" required></textarea>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 col-lg-offset-9 col-md-offset-8 col-sm-offset-6">
            <button ng-click="submitReview()" class="btn btn-block btn-primary waves-effect waves-light space-top-none space-bottom-none">Leave Review</button>
          </div>
        </div>
      </div>
    {{user}}
    </form>
    `,
    link: function( s, e, a ){
      s.leaveReview.productId = +productId;
    }
  }
});
