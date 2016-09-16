app.directive("reviews", function(){
  return {
    restrict: "E",
    scope: {
      review: "="
    },
    template: `
    <div class="review">
      <div class="review-body">
        <div class="review-meta">
          <div class="column">
            <h4 class="review-title">{{review.title}}</h4>
          </div>
          <div>
            <review-rating rate="review.rating">
            </review-rating>
          </div>
        </div>
        <p>{{review.content}}</p>
        <cite>{{review.user}}</cite>
      </div>
    </div>
    `,
    link: function( s, e, a ){

    }
  }
});
