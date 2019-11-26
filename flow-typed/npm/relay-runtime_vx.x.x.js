// flow-typed signature: 71a33e5045e81854c2838154e9a110c4
// flow-typed version: <<STUB>>/relay-runtime_v5.0.0/flow_v0.101.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'relay-runtime'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

 import type {
   TEnvironment,
   TFragment,
   TGraphQLTaggedNode,
   TNode,
   TOperation,
   TPayload,
 } from 'react-relay';

declare module 'relay-runtime' {
  declare export opaque type FragmentReference: empty;
  declare export type ConnectionMetadata = {
    path: ?Array<string>,
    direction: ?('forward' | 'backward' | 'bidirectional'),
    cursor: ?string,
    count: ?string,
    stream?: boolean,
  };

  declare export type ReaderPaginationMetadata = {|
    +backward: {|
      +count: string,
      +cursor: string,
    |} | null,
    +forward: {|
      +count: string,
      +cursor: string,
    |} | null,
    +path: $ReadOnlyArray<string>,
  |};

  /**
   * Represents a single operation used to processing and normalize runtime
   * request results.
   */
  declare export type NormalizationOperation = {|
    +kind: 'Operation',
    +name: string,
    +argumentDefinitions: $ReadOnlyArray<NormalizationLocalArgumentDefinition>,
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationHandle =
    | NormalizationScalarHandle
    | NormalizationLinkedHandle;

  declare export type NormalizationLinkedHandle = {|
    +kind: 'LinkedHandle',
    +alias: ?string,
    +name: string,
    +args: ?$ReadOnlyArray<NormalizationArgument>,
    +handle: string,
    +key: string,
    // T45504512: new connection model
    // NOTE: this property is optional because it's expected to be rarely used
    +dynamicKey?: ?NormalizationArgument,
    +filters: ?$ReadOnlyArray<string>,
  |};

  declare export type NormalizationScalarHandle = {|
    +kind: 'ScalarHandle',
    +alias: ?string,
    +name: string,
    +args: ?$ReadOnlyArray<NormalizationArgument>,
    +handle: string,
    +key: string,
    // T45504512: new connection model
    // NOTE: this property is optional because it's expected to be rarely used
    +dynamicKey?: ?NormalizationArgument,
    +filters: ?$ReadOnlyArray<string>,
  |};

  declare export type NormalizationArgument =
    | NormalizationLiteral
    | NormalizationVariable;

  declare export type NormalizationCondition = {|
    +kind: 'Condition',
    +passingValue: boolean,
    +condition: string,
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationClientExtension = {|
    +kind: 'ClientExtension',
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationField =
    | NormalizationScalarField
    | NormalizationLinkedField;

  declare export type NormalizationInlineFragment = {|
    +kind: 'InlineFragment',
    +selections: $ReadOnlyArray<NormalizationSelection>,
    +type: string,
  |};

  declare export type NormalizationLinkedField = {|
    +kind: 'LinkedField',
    +alias: ?string,
    +name: string,
    +storageKey: ?string,
    +args: ?$ReadOnlyArray<NormalizationArgument>,
    +concreteType: ?string,
    +plural: boolean,
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationModuleImport = {|
    +kind: 'ModuleImport',
    +documentName: string,
    +fragmentPropName: string,
    +fragmentName: string,
  |};

  declare export type NormalizationLiteral = {|
    +kind: 'Literal',
    +name: string,
    +type?: ?string,
    +value: mixed,
  |};

  declare export type NormalizationLocalArgumentDefinition = {|
    +kind: 'LocalArgument',
    +name: string,
    +type: string,
    +defaultValue: mixed,
  |};

  declare export type NormalizationNode =
    | NormalizationClientExtension
    | NormalizationCondition
    | NormalizationDefer
    | NormalizationLinkedField
    | NormalizationInlineFragment
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;

  declare export type NormalizationScalarField = {|
    +kind: 'ScalarField',
    +alias: ?string,
    +name: string,
    +args: ?$ReadOnlyArray<NormalizationArgument>,
    +storageKey: ?string,
  |};

  declare export type NormalizationSelection =
    | NormalizationCondition
    | NormalizationClientExtension
    | NormalizationDefer
    | NormalizationField
    | NormalizationHandle
    | NormalizationInlineFragment
    | NormalizationModuleImport
    | NormalizationStream;

  declare export type NormalizationSplitOperation = {|
    +kind: 'SplitOperation',
    +name: string,
    +metadata: ?{+[key: string]: mixed},
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationStream = {|
    +if: string | null,
    +kind: 'Stream',
    +label: string,
    +metadata: ?{+[key: string]: mixed},
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationDefer = {|
    +if: string | null,
    +kind: 'Defer',
    +label: string,
    +metadata: ?{+[key: string]: mixed},
    +selections: $ReadOnlyArray<NormalizationSelection>,
  |};

  declare export type NormalizationVariable = {|
    +kind: 'Variable',
    +name: string,
    +type?: ?string,
    +variableName: string,
  |};

  declare export type NormalizationSelectableNode =
    | NormalizationDefer
    | NormalizationLinkedField
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;

  declare type BaseRequestParameters = {|
      +name: string,
      +operationKind: 'mutation' | 'query' | 'subscription',
      +metadata: {[key: string]: mixed},
    |};
  /**
   * Contains the `text` (or persisted `id`) required for executing a common
   * GraphQL request.
   */
  declare export type RequestParameters =
    | {|...BaseRequestParameters, +text: null, +id: string|}
    | {|...BaseRequestParameters, +text: string, +id: null|};

  /**
   * Represents a common GraphQL request with `text` (or persisted `id`) can be
   * used to execute it, an `operation` containing information to normalize the
   * results, and a `fragment` derived from that operation to read the response
   * data (masking data from child fragments).
   */
  declare export type ConcreteRequest = {|
    +kind: 'Request',
    +fragment: ReaderFragment,
    +operation: NormalizationOperation,
    +params: RequestParameters,
  |};

  declare export type ReaderRefetchMetadata = {|
    +connection: ?ReaderPaginationMetadata,
    +operation: string | ConcreteRequest,
    +fragmentPathInResult: Array<string>,
  |};

  declare export type ReaderFragmentSpread = {|
    +kind: 'FragmentSpread',
    +name: string,
    +args: ?$ReadOnlyArray<ReaderArgument>,
  |};

  declare export type ReaderInlineDataFragmentSpread = {|
    +kind: 'InlineDataFragmentSpread',
    +name: string,
    +selections: $ReadOnlyArray<ReaderSelection>,
  |};

  declare export type ReaderFragment = {|
    +kind: 'Fragment',
    +name: string,
    +type: string,
    +metadata: ?{|
      +connection?: $ReadOnlyArray<ConnectionMetadata>,
      +mask?: boolean,
      +plural?: boolean,
      +refetch?: ReaderRefetchMetadata,
    |},
    +argumentDefinitions: $ReadOnlyArray<ReaderArgumentDefinition>,
    +selections: $ReadOnlyArray<ReaderSelection>,
  |};

  // Marker type for a @refetchable fragment
  declare export type ReaderRefetchableFragment = {|
    ...ReaderFragment,
    +metadata: {|
      +connection?: [ConnectionMetadata],
      +refetch: ReaderRefetchMetadata,
    |},
  |};

  // Marker Type for a @refetchable fragment with a single use of @connection
  declare export type ReaderPaginationFragment = {|
    ...ReaderFragment,
    +metadata: {|
      +connection: [ConnectionMetadata],
      +refetch: {|
        ...ReaderRefetchMetadata,
        connection: ReaderPaginationMetadata,
      |},
    |},
  |};

  declare export type ReaderInlineDataFragment = {|
    +kind: 'InlineDataFragment',
    +name: string,
  |};

  declare export type ReaderArgument = ReaderLiteral | ReaderVariable;

  declare export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

  declare export type ReaderCondition = {|
    +kind: 'Condition',
    +passingValue: boolean,
    +condition: string,
    +selections: $ReadOnlyArray<ReaderSelection>,
  |};

  declare export type ReaderClientExtension = {|
    +kind: 'ClientExtension',
    +selections: $ReadOnlyArray<ReaderSelection>,
  |};

  declare export type ReaderField = ReaderScalarField | ReaderLinkedField;

  declare export type ReaderRootArgument = {|
    +kind: 'RootArgument',
    +name: string,
    +type: ?string,
  |};

  declare export type ReaderInlineFragment = {|
    +kind: 'InlineFragment',
    +selections: $ReadOnlyArray<ReaderSelection>,
    +type: string,
  |};

  declare export type ReaderLinkedField = {|
    +kind: 'LinkedField',
    +alias: ?string,
    +name: string,
    +storageKey: ?string,
    +args: ?$ReadOnlyArray<ReaderArgument>,
    +concreteType: ?string,
    +plural: boolean,
    +selections: $ReadOnlyArray<ReaderSelection>,
  |};

  declare export type ReaderModuleImport = {|
    +kind: 'ModuleImport',
    +documentName: string,
    +fragmentPropName: string,
    +fragmentName: string,
  |};

  declare export type ReaderLiteral = {|
    +kind: 'Literal',
    +name: string,
    +type?: ?string,
    +value: mixed,
  |};

  declare export type ReaderLocalArgument = {|
    +kind: 'LocalArgument',
    +name: string,
    +type: string,
    +defaultValue: mixed,
  |};

  declare export type ReaderNode =
    | ReaderCondition
    | ReaderLinkedField
    | ReaderFragment
    | ReaderInlineFragment;

  declare export type ReaderScalarField = {|
    +kind: 'ScalarField',
    +alias: ?string,
    +name: string,
    +args: ?$ReadOnlyArray<ReaderArgument>,
    +storageKey: ?string,
  |};

  declare export type ReaderSelection =
    | ReaderCondition
    | ReaderClientExtension
    | ReaderField
    | ReaderFragmentSpread
    | ReaderInlineDataFragmentSpread
    | ReaderInlineFragment
    | ReaderModuleImport;

  declare export type ReaderVariable = {|
    +kind: 'Variable',
    +name: string,
    +type?: ?string,
    +variableName: string,
  |};

  declare export type DataID = string;

  declare export type Variables = {
    [name: string]: any,
  };

  declare export type RecordProxy = {|
    copyFieldsFrom(source: RecordProxy): void,
    getDataID(): DataID,
    getLinkedRecord(name: string, args?: ?Variables): ?RecordProxy | void,
    getLinkedRecords(
        name: string,
        args?: ?Variables
    ): ?$ReadOnlyArray<?RecordProxy | void> | void,
    getOrCreateLinkedRecord(name: string, typeName: string, args?: ?Variables): RecordProxy,
    getType(): string,
    getValue(name: string, args?: ?Variables): mixed,
    setLinkedRecord(record: RecordProxy, name: string, args?: ?Variables): RecordProxy,
    setLinkedRecords(
        records: Array<?RecordProxy | void>,
        name: string,
        args?: ?Variables
    ): RecordProxy,
    setValue(value: mixed, name: string, args?: ?Variables): RecordProxy,
  |};

  declare export type RecordSourceProxy = {|
    create(dataID: DataID, typeName: string): RecordProxy,
    delete(dataID: DataID): void,
    get(dataID: DataID): ?RecordProxy | void,
    getRoot(): RecordProxy,
  |};

  declare export type StoreUpdater = (store: RecordSourceProxy) => void;

  /**
   * The public API of Relay core. Represents an encapsulated environment with its
   * own in-memory cache.
   */
  declare export interface Environment
    extends CEnvironment<
      TEnvironment,
      TFragment,
      TGraphQLTaggedNode,
      TNode,
      TOperation,
      TPayload,
    > {
    /**
     * Applies an optimistic mutation to the store without committing it to the
     * server. The returned Disposable can be used to revert this change at a
     * later time.
     */
    applyMutation(config: {|
      configs: Array<RelayMutationConfig>,
      operation: ConcreteOperationDefinition,
      optimisticResponse: Object,
      variables: Variables,
    |}): Disposable;

    /**
     * Applies an optimistic mutation if provided and commits the mutation to the
     * server. The returned Disposable can be used to bypass the `onCompleted`
     * and `onError` callbacks when the server response is returned.
     */
    sendMutation<ResponseType>(config: {|
      configs: Array<RelayMutationConfig>,
      onCompleted?: ?(response: ResponseType) => void,
      onError?: ?(error: Error) => void,
      operation: ConcreteOperationDefinition,
      optimisticOperation?: ?ConcreteOperationDefinition,
      optimisticResponse?: ?Object,
      variables: Variables,
      uploadables?: UploadableMap,
    |}): Disposable;
  }

  declare export function commitLocalUpdate(environment: Environment, updater: StoreUpdater): void;

  /**
   * A function that executes a GraphQL operation with request/response semantics.
   *
   * May return an Observable or Promise of a plain GraphQL server response, or
   * a composed ExecutePayload object supporting additional metadata.
   */
  declare export type FetchFunction = (
      request: RequestParameters,
      variables: Variables,
      cacheConfig: CacheConfig,
      uploadables?: UploadableMap | null,
  ) => ObservableFromValue<GraphQLResponse>;

  /**
   * A function that returns an Observable representing the response of executing
   * a GraphQL operation.
   */
  declare export type ExecuteFunction = (
      request: RequestParameters,
      variables: Variables,
      cacheConfig: CacheConfig,
      uploadables?: UploadableMap | null,
  ) => RelayObservable<GraphQLResponse>;


  /**
   * An interface for fetching the data for one or more (possibly interdependent)
   * queries.
   */
  declare export interface NetworkInstance {
      execute: ExecuteFunction;
  }

  /**
   * Settings for how a query response may be cached.
   *
   * - `force`: causes a query to be issued unconditionally, irrespective of the
   *   state of any configured response cache.
   * - `poll`: causes a query to live update by polling at the specified interval
   *   in milliseconds. (This value will be passed to setTimeout.)
   * - `liveConfigId`: causes a query to live update by calling GraphQLLiveQuery,
   *   it represents a configuration of gateway when doing live query
   * - `metadata`: user-supplied metadata.
   * - `transactionId`: a user-supplied value, intended for use as a unique id for
   *   a given instance of executing an operation.
   */
  declare export interface CacheConfig {
      force?: boolean | null;
      poll?: number | null;
      liveConfigId?: string | null;
      metadata?: { [key: string]: any };
      transactionId?: string | null;
  }

  declare export interface LegacyObserver<T> {
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (data: T) => void;
  }

  /**
   * The shape of a GraphQL response as dictated by the
   * [spec](https://graphql.github.io/graphql-spec/June2018/#sec-Response-Format)
   */
  declare export interface GraphQLResponseWithData {
      data: PayloadData;
      errors?: PayloadError[];
      extensions?: PayloadExtensions;
      label?: string;
      path?: string[] | number[];
  }

  declare export interface GraphQLResponseWithoutData {
      data?: PayloadData;
      errors: PayloadError[];
      extensions?: PayloadExtensions;
      label?: string;
      path?: Array<string | number>;
  }

  declare export type GraphQLResponse = GraphQLResponseWithData | GraphQLResponseWithoutData;

  declare export class RelayObservable<T> implements Subscribable<T> {
      // Use RelayObservable.create(source);
      constructor(source: never): void;

      create<V>(source: Source<V>): RelayObservable<V>;

      /**
       * When an emitted error event is not handled by an Observer, it is reported
       * to the host environment (what the ESObservable spec refers to as
       * "HostReportErrors()").
       *
       * The default implementation in development rethrows thrown errors, and
       * logs emitted error events to the console, while in production does nothing
       * (swallowing unhandled errors).
       *
       * Called during application initialization, this method allows
       * application-specific handling of unhandled errors. Allowing, for example,
       * integration with error logging or developer tools.
       *
       * A second parameter `isUncaughtThrownError` is true when the unhandled error
       * was thrown within an Observer handler, and false when the unhandled error
       * was an unhandled emitted event.
       *
       *  - Uncaught thrown errors typically represent avoidable errors thrown from
       *    application code, which should be handled with a try/catch block, and
       *    usually have useful stack traces.
       *
       *  - Unhandled emitted event errors typically represent unavoidable events in
       *    application flow such as network failure, and may not have useful
       *    stack traces.
       */
      onUnhandledError(callback: (error: Error, isUncaughtThrownError: boolean) => void): void;

      /**
       * Accepts various kinds of data sources, and always returns a RelayObservable
       * useful for accepting the result of a user-provided FetchFunction.
       */
      from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

      /**
       * Similar to promise.catch(), observable.catch() handles error events, and
       * provides an alternative observable to use in it's place.
       *
       * If the catch handler throws a new error, it will appear as an error event
       * on the resulting Observable.
       */
      catch<U>(fn: (error: Error) => RelayObservable<U>): RelayObservable<T | U>;

      /**
       * Returns a new Observable which first yields values from this Observable,
       * then yields values from the next Observable. This is useful for chaining
       * together Observables of finite length.
       */
      concat<U>(next: RelayObservable<U>): RelayObservable<T | U>;

      /**
       * Returns a new Observable which returns the same values as this one, but
       * modified so that the provided Observer is called to perform a side-effects
       * for all events emitted by the source.
       *
       * Any errors that are thrown in the side-effect Observer are unhandled, and
       * do not affect the source Observable or its Observer.
       *
       * This is useful for when debugging your Observables or performing other
       * side-effects such as logging or performance monitoring.
       */
      do(observer: Observer<T>): RelayObservable<T>;

      /**
       * Returns a new Observable which returns the same values as this one, but
       * modified so that the finally callback is performed after completion,
       * whether normal or due to error or unsubscription.
       *
       * This is useful for cleanup such as resource finalization.
       */
      finally(fn: () => unknown): RelayObservable<T>;

      /**
       * Returns a new Observable which is identical to this one, unless this
       * Observable completes before yielding any values, in which case the new
       * Observable will yield the values from the alternate Observable.
       *
       * If this Observable does yield values, the alternate is never subscribed to.
       *
       * This is useful for scenarios where values may come from multiple sources
       * which should be tried in order, i.e. from a cache before a network.
       */
      ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

      /**
       * Observable's primary API: returns an unsubscribable Subscription to the
       * source of this Observable.
       *
       * Note: A sink may be passed directly to .subscribe() as its observer,
       * allowing for easily composing Observables.
       */
      subscribe(observer: Observer<T> | Sink<T>): Subscription;

      /**
       * Returns a new Observerable where each value has been transformed by
       * the mapping function.
       */
      map<U>(fn: (value: T) => U): RelayObservable<U>;

      /**
       * Returns a new Observable where each value is replaced with a new Observable
       * by the mapping function, the results of which returned as a single
       * merged Observable.
       */
      mergeMap<U>(fn: (value: T) => ObservableFromValue<U>): RelayObservable<U>;

      /**
       * Returns a new Observable which first mirrors this Observable, then when it
       * completes, waits for `pollInterval` milliseconds before re-subscribing to
       * this Observable again, looping in this manner until unsubscribed.
       *
       * The returned Observable never completes.
       */
      poll(pollInterval: number): RelayObservable<T>;

      /**
       * Returns a Promise which resolves when this Observable yields a first value
       * or when it completes with no value.
       */
      toPromise(): Promise<T | void>;
  }

  /**
   * A function that executes a GraphQL subscription operation, returning zero or
   * more raw server responses over time.
   */
  declare export type SubscribeFunction = (
      request: RequestParameters,
      variables: Variables,
      cacheConfig: CacheConfig,
      observer?: LegacyObserver<GraphQLResponse>,
  ) => RelayObservable<GraphQLResponse> | Disposable;

  declare export type RelayNetwork = {
    create(fetchFn: FetchFunction, subscribeFn?: SubscribeFunction): NetworkInstance;
  };

  declare export var ConnectionHandler: any;
  declare export var RecordSource: any;
  declare export var Store: any;
  declare export var Network: RelayNetwork;
  declare export var ROOT_ID: string;

  declare export type RequestNode = any;

  declare export interface Record {
    [key: string]: mixed;
  }

  declare export interface RecordMap {
    [dataID: DataID]: ?Record;
  }

  declare export default {
    // Core API
    Observable: any,
    QueryResponseCache: any,

    areEqualSelectors: any,
    createFragmentSpecResolver: any,
    createOperationDescriptor: any,
    getDataIDsFromFragment: any,
    getDataIDsFromObject: any,
    getFragment: any,
    getFragmentOwner: any,
    getFragmentOwners: any,
    getPaginationFragment: any,
    getModuleComponentKey: any,
    getModuleOperationKey: any,
    getRefetchableFragment: any,
    getInlineDataFragment: any,
    getRequest: any,
    getSingularSelector: any,
    getPluralSelector: any,
    getSelector: any,
    getSelectorsFromObject: any,
    getStorageKey: any,
    getVariablesFromSingularFragment: any,
    getVariablesFromPluralFragment: any,
    getVariablesFromFragment: any,
    getVariablesFromObject: any,
    graphql: any,

    // Declarative mutation API
    MutationTypes: any,
    RangeOperations: any,

    // Extensions
    DefaultHandlerProvider: any,
    DefaultMissingFieldHandlers: any,
    ViewerHandler: any,

    // Helpers (can be implemented via the above API)
    applyOptimisticMutation: any,
    commitMutation: any,
    fetchQuery: any,
    isRelayModernEnvironment: any,
    requestSubscription: any,

    // Configuration interface for legacy or special uses
    ConnectionInterface: any,

    // Utilities
    RelayProfiler: any,

    // INTERNAL-ONLY: any.
    RelayConcreteNode: any,
    RelayError: any,
    RelayFeatureFlags: any,
    RelayNetworkLoggerTransaction: any,
    DEFAULT_HANDLE_KEY: any,
    FRAGMENTS_KEY: any,
    FRAGMENT_OWNER_KEY: any,
    ID_KEY: any,
    ROOT_ID: *,
    ROOT_TYPE: *,
    REF_KEY: any,
    REFS_KEY: any,
    TYPENAME_KEY: any,

    createRelayNetworkLogger: any,
    deepFreeze: any,
    generateClientID: any,
    getRelayHandleKey: any,
    isScalarAndEqual: any,
    recycleNodesInto: any,
    stableCopy: any,
    getFragmentIdentifier: any,
    getFragmentSpecIdentifier: any,
    getRequestParametersIdentifier: any,
    __internal: {
      createRelayContext: any,
      getModernOperationVariables: any,
      fetchQuery: any,
      fetchQueryDeduped: any,
      getPromiseForRequestInFlight: any,
      getObservableForRequestInFlight: any,
    },
    ROOT_ID: string,
  };
}
