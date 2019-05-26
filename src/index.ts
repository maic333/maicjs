import 'reflect-metadata';

// export core modules
import MaicApp from './core/maic-app';
export { MaicApp };

// export decorators
import ApiRoute from './decorators/api-route';
export { ApiRoute };
import ApiController from './decorators/api-controller';
export { ApiController };
import RouteRequest from './decorators/route-request';
export { RouteRequest };
import RouteResponse from './decorators/route-response';
export { RouteResponse };

// export types
import ApiRequest from './types/api-request';
export { ApiRequest };
import ApiResponse from './types/api-response';
export { ApiResponse };
import ApiHttpMethod from './types/api-http-method';
export { ApiHttpMethod };

// export DI modules
import Injectable from './dependency-injection/injectable';
export { Injectable };
import DependencyInjector from './dependency-injection/dependency-injector';
export { DependencyInjector };
