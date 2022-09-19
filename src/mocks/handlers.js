import { rest } from "msw";
import { shuffle } from "./utility";
import {
  feedbackInitValues,
  currentPeriod,
  previousPeriod,
  monthsXAxis,
  yearsXAxis,
  daysXAxis,
  weeksXAxis,
} from "./data";

export const handlers = [
  rest.get("/feedback/init", (req, res, ctx) => {
    return res(ctx.json(feedbackInitValues));
  }),

  rest.get("/feedback/search", (req, res, ctx) => {
    const timeline = req.url.searchParams.get("timeline");

    const graphResponse = {
      currentPeriod: shuffle(currentPeriod),
      previousPeriod: shuffle(previousPeriod),
      xCategory: [],
    };

    switch (timeline) {
      case "months":
        graphResponse.xCategory = monthsXAxis;
        graphResponse.currentPeriod = shuffle(currentPeriod);
        graphResponse.previousPeriod = shuffle(previousPeriod);
        break;

      case "years":
        graphResponse.xCategory = yearsXAxis;
        graphResponse.currentPeriod = shuffle(currentPeriod.slice(1, 13));
        graphResponse.previousPeriod = shuffle(previousPeriod.slice(1, 13));
        break;

      case "weeks":
        graphResponse.xCategory = weeksXAxis;
        graphResponse.currentPeriod = shuffle(currentPeriod.slice(1, 8));
        graphResponse.previousPeriod = shuffle(previousPeriod.slice(1, 8));
        break;

      case "days":
        graphResponse.xCategory = daysXAxis;
        graphResponse.currentPeriod = shuffle(currentPeriod.slice(1, 25));
        graphResponse.previousPeriod = shuffle(previousPeriod.slice(1, 25));
        break;
    }
    return res(ctx.json(graphResponse));
  }),
];
