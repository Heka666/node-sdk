/**
 * (C) Copyright IBM Corp. 2020.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const { NoAuthAuthenticator, unitTestUtils } = require('ibm-cloud-sdk-core');
const AssistantV2 = require('../../dist/assistant/v2');

const { getOptions, checkUrlAndMethod, checkMediaHeaders, expectToBePromise } = unitTestUtils;

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://gateway.watsonplatform.net/assistant/api/assistant/api',
  version: '2018-10-18',
};

const assistant = new AssistantV2(service);
const createRequestMock = jest.spyOn(assistant, 'createRequest');

// dont actually create a request
createRequestMock.mockImplementation(() => Promise.resolve());

afterEach(() => {
  createRequestMock.mockClear();
});

describe('AssistantV2', () => {
  describe('createSession', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const params = {
          assistantId,
        };

        const createSessionResult = assistant.createSession(params);

        // all methods should return a Promise
        expectToBePromise(createSessionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/assistants/{assistant_id}/sessions', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['assistant_id']).toEqual(assistantId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          assistantId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        assistant.createSession(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['assistantId'];

        let err;
        try {
          await assistant.createSession({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['assistantId'];

        const createSessionPromise = assistant.createSession();
        expectToBePromise(createSessionPromise);

        createSessionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('deleteSession', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const sessionId = 'fake_sessionId';
        const params = {
          assistantId,
          sessionId,
        };

        const deleteSessionResult = assistant.deleteSession(params);

        // all methods should return a Promise
        expectToBePromise(deleteSessionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(options, '/v2/assistants/{assistant_id}/sessions/{session_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.path['assistant_id']).toEqual(assistantId);
        expect(options.path['session_id']).toEqual(sessionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const sessionId = 'fake_sessionId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          assistantId,
          sessionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        assistant.deleteSession(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['assistantId', 'sessionId'];

        let err;
        try {
          await assistant.deleteSession({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['assistantId', 'sessionId'];

        const deleteSessionPromise = assistant.deleteSession();
        expectToBePromise(deleteSessionPromise);

        deleteSessionPromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
  describe('message', () => {
    describe('positive tests', () => {
      test('should pass the right params to createRequest', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const sessionId = 'fake_sessionId';
        const input = 'fake_input';
        const context = 'fake_context';
        const params = {
          assistantId,
          sessionId,
          input,
          context,
        };

        const messageResult = assistant.message(params);

        // all methods should return a Promise
        expectToBePromise(messageResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const options = getOptions(createRequestMock);

        checkUrlAndMethod(
          options,
          '/v2/assistants/{assistant_id}/sessions/{session_id}/message',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(options.body['input']).toEqual(input);
        expect(options.body['context']).toEqual(context);
        expect(options.path['assistant_id']).toEqual(assistantId);
        expect(options.path['session_id']).toEqual(sessionId);
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const assistantId = 'fake_assistantId';
        const sessionId = 'fake_sessionId';
        const userAccept = 'fake/header';
        const userContentType = 'fake/header';
        const params = {
          assistantId,
          sessionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        assistant.message(params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async done => {
        // required parameters for this method
        const requiredParams = ['assistantId', 'sessionId'];

        let err;
        try {
          await assistant.message({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
        done();
      });

      test('should reject promise when required params are not given', done => {
        // required parameters for this method
        const requiredParams = ['assistantId', 'sessionId'];

        const messagePromise = assistant.message();
        expectToBePromise(messagePromise);

        messagePromise.catch(err => {
          expect(err.message).toMatch(/Missing required parameters/);
          done();
        });
      });
    });
  });
});
