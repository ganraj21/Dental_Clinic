/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a AssessmentsInstance
 */
export interface AssessmentsContextUpdateOptions {
    /** The offset of the conversation */
    offset: number;
    /** The answer text selected by user */
    answerText: string;
    /** The id of the answer selected by user */
    answerId: string;
    /** The Token HTTP request header */
    token?: string;
}
/**
 * Options to pass to create a AssessmentsInstance
 */
export interface AssessmentsListInstanceCreateOptions {
    /** The id of the category  */
    categoryId: string;
    /** The name of the category */
    categoryName: string;
    /** Segment Id of the conversation */
    segmentId: string;
    /** Name of the user assessing conversation */
    userName: string;
    /** Email of the user assessing conversation */
    userEmail: string;
    /** The id of the Agent */
    agentId: string;
    /** The offset of the conversation. */
    offset: number;
    /** The question Id selected for assessment */
    metricId: string;
    /** The question name of the assessment */
    metricName: string;
    /** The answer text selected by user */
    answerText: string;
    /** The id of the answer selected by user */
    answerId: string;
    /** Questionnaire Id of the associated question */
    questionnaireId: string;
    /** The Token HTTP request header */
    token?: string;
}
export interface AssessmentsContext {
    /**
     * Update a AssessmentsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssessmentsInstance
     */
    update(params: AssessmentsContextUpdateOptions, callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssessmentsContextSolution {
    assessmentId: string;
}
export declare class AssessmentsContextImpl implements AssessmentsContext {
    protected _version: V1;
    protected _solution: AssessmentsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assessmentId: string);
    update(params: AssessmentsContextUpdateOptions, callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssessmentsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssessmentsResource {
    account_sid: string;
    assessment_id: string;
    offset: number;
    report: boolean;
    weight: number;
    agent_id: string;
    segment_id: string;
    user_name: string;
    user_email: string;
    answer_text: string;
    answer_id: string;
    assessment: any;
    timestamp: number;
    url: string;
}
export declare class AssessmentsInstance {
    protected _version: V1;
    protected _solution: AssessmentsContextSolution;
    protected _context?: AssessmentsContext;
    constructor(_version: V1, payload: AssessmentsResource, assessmentId?: string);
    /**
     * The unique SID identifier of the Account.
     */
    accountSid: string;
    /**
     * The unique id of the assessment
     */
    assessmentId: string;
    /**
     * Offset of the conversation
     */
    offset: number;
    /**
     * The flag indicating if this assessment is part of report
     */
    report: boolean;
    /**
     * The weightage given to this comment
     */
    weight: number;
    /**
     * The id of the Agent
     */
    agentId: string;
    /**
     * Segment Id of conversation
     */
    segmentId: string;
    /**
     * The name of the user.
     */
    userName: string;
    /**
     * The email id of the user.
     */
    userEmail: string;
    /**
     * The answer text selected by user
     */
    answerText: string;
    /**
     * The id of the answer selected by user
     */
    answerId: string;
    /**
     * Assessment Details associated with an assessment
     */
    assessment: any;
    timestamp: number;
    url: string;
    private get _proxy();
    /**
     * Update a AssessmentsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssessmentsInstance
     */
    update(params: AssessmentsContextUpdateOptions, callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assessmentId: string;
        offset: number;
        report: boolean;
        weight: number;
        agentId: string;
        segmentId: string;
        userName: string;
        userEmail: string;
        answerText: string;
        answerId: string;
        assessment: any;
        timestamp: number;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssessmentsSolution {
}
export interface AssessmentsListInstance {
    _version: V1;
    _solution: AssessmentsSolution;
    _uri: string;
    (assessmentId: string): AssessmentsContext;
    get(assessmentId: string): AssessmentsContext;
    /**
     * Create a AssessmentsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssessmentsInstance
     */
    create(params: AssessmentsListInstanceCreateOptions, callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssessmentsListInstance(version: V1): AssessmentsListInstance;
export {};
