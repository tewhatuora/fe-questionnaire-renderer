/**
 * A utility function for working with React Router paths. It allows us to both define
 * routes and build valid links to those routes with the same function, making it easier
 * to link to, search for, and refactor our routes (no more magic strings!)
 *
 * When called with only a `path`, it will return that path. This is useful when defining
 * a route, or creating a link to a simple, non-parameterised route.
 *
 * When called with `routeParams`, it will return a link to the path, substituting the
 * route param values for the placeholders in the path.
 *
 * When called with `queryParams`, it will return a link to the path, including a
 * queryString containing the query params.
 *
 */
export interface BuildLinkArgs {
    path: string;
    routeParams?: {
        [x: string]: string | undefined;
    } | undefined;
    queryParams?: Record<string, any>;
}
declare const buildLink: ({ path, routeParams, queryParams }: BuildLinkArgs) => string;
export default buildLink;
