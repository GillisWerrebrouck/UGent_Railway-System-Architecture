package com.railway.timetable_service.adapters.messaging;

import org.springframework.integration.annotation.Gateway;
import org.springframework.integration.annotation.MessagingGateway;

import com.railway.timetable_service.domain.TimetableItem;

@MessagingGateway
public interface MessageGateway {
	@Gateway(requestChannel = Channels.GET_ROUTE)
	public void getRoute(RouteRequest routeRequest);
	
	@Gateway(requestChannel = Channels.TIMETABLE_ITEM_CREATED_RESULT)
	public void emitCreateTimetableItemCompleted(TimetableItem timetableItem);
}