import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("/board/:board-id", "routes/board.tsx"), route('/board-update', 'routes/update-board.ts')] satisfies RouteConfig;
